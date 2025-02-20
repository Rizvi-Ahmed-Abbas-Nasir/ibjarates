import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import fetchMachineKey from "../../../api/getMachineKey";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 5rem;

  @media (max-width: 1370px) {
    padding: 0rem 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 1rem;
  }
`;

interface PriceData {
  RateDate: string;
  RateTime: string;
  Purity: string;
  GoldRate: string;
  SilverRate: string;
  Carat: number;
}

interface DateRange {
  startDate: string;
  endDate: string;
}

export default function ChartSection() {
  const [machineKey, setMachineKey] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("weekly");
  const [chartData, setChartData] = useState<number[]>([
    1200, 1900, 3000, 2500, 2800, 3500, 4100,
  ]);
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  // const [chartData, setChartData] = useState({
  //   labels: [] as string[],
  //   datasets: [] as any[],
  // });

  const containerRef = useRef<HTMLDivElement | null>(null);

  function formatDateForUrl(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const calculateDateRange = (range: string): DateRange => {
    const today = new Date();
    const endDate = new Date(today); // Current date
    const startDate = new Date(today); // Start date to calculate

    switch (range) {
      case "weekly":
        startDate.setDate(today.getDate() - 7); // Subtract 7 days
        break;
      case "monthly":
        startDate.setMonth(today.getMonth() - 1); // Subtract 1 month
        break;
      case "6-month":
        startDate.setMonth(today.getMonth() - 6); // Subtract 6 months
        break;
      default:
        throw new Error("Invalid range");
    }

    return {
      startDate: formatDateForUrl(startDate),
      endDate: formatDateForUrl(endDate),
    };
  };

  const fetchData = async (
    machineKey: string,
    range: DateRange
  ): Promise<void> => {
    try {
      const { startDate, endDate } = range;
      const response = await axios.get(
        `https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=GetRates&START_DATE=${startDate}&END_DATE=${endDate}&Machine_Key=${machineKey}&ACCESS_TOKEN=IBJSW3SEA73`
      );

      console.log("get rates data", response.data);

      if (Array.isArray(response.data) && response.data.length > 0) {
        setPriceData(response.data);
      } else {
        setPriceData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setPriceData([]);
    }
  };

  const handleFetchData: (rangeType: string) => Promise<void> = async (
    rangeType: string
  ): Promise<void> => {
    try {
      const range = calculateDateRange(rangeType);
      if (machineKey) {
        await fetchData(machineKey, range);
      } else {
        console.warn("Machine key is not available.");
      }
    } catch (error) {
      console.error("Error in handleFetchData:", error);
    }

    if (rangeType === "weekly") {
      setChartData([1200, 1900, 3000, 2500, 2800, 3500, 4100]); // 7 data points for weekly
    } else if (rangeType === "monthly") {
      setChartData([
        1200, 1900, 3000, 2500, 2800, 3500, 4100, 4300, 2000, 3000, 3900, 4500,
      ]); // 12 data points for monthly
    } else if (rangeType === "6-month") {
      setChartData([5000, 7500, 9500, 8800, 10200, 12000]); // 6 data points for 6-month
    }
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      const key = await fetchMachineKey();
      if (!key) return;

      setMachineKey(key);
      const range = calculateDateRange("weekly");
      await fetchData(key, range);
    };

    fetchAndSetData();
  }, []);

  useEffect(() => {
    gsap.to(".chart_section", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const salesData = {
    labels:
      activeButton === "weekly"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : activeButton === "monthly"
        ? [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]
        : ["Jan-Jun", "Jul-Dec", "Jan-Jun", "Jul-Dec", "Jan-Jun", "Jul-Dec"],
    datasets: [
      {
        label: "Sales 2022",
        data: chartData,
        fill: true,
        backgroundColor: "rgba(75, 29, 130, 0.2)",
        borderColor: "#4B1D82",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const handleButtonClick = (rangeType: string) => {
    setActiveButton(rangeType);
    handleFetchData(rangeType);
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw} sales`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10000,
        ticks: {
          stepSize: 1000,
          callback: (value: any) => `${value / 1000}k`,
        },
      },
    },
  };

  return (
    <Container ref={containerRef}>
      <div className="chart_section px-6 py-6 rounded-[2rem] bg-[#fff2d8] shadow-lg w-[100%] flex flex-col justify-start">
        <h3 className="text-black text-lg font-bold mb-4">API </h3>
        <div className="text-black text-sm mb-4 flex justify-between p-5">
          <p>
            <span className="chart-title text-[3rem] font-bold">
              IBJA RATES GOLD
            </span>{" "}
          </p>
          <div className="flex justify-between gap-5 bg-[#fafaf8] px-[3rem] py-[0.7rem] rounded-[2rem]">
            <button
              className={`px-3 py-1 rounded-[2rem] text-sm ${
                activeButton === "weekly"
                  ? "bg-[#070757] text-white"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick("weekly")}
            >
              Weekly
            </button>
            <button
              className={`px-3 py-1 rounded-[2rem] text-sm ${
                activeButton === "monthly"
                  ? "bg-[#070757] text-white"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-5 py-3 rounded-[2rem] text-sm ${
                activeButton === "6-month"
                  ? "bg-[#070757] text-white"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick("6-month")}
            >
              6 Month
            </button>
          </div>
        </div>
        <div className="py-5" style={{ height: "550px" }}>
          <Line data={salesData} options={chartOptions} />
        </div>
      </div>
    </Container>
  );
}
