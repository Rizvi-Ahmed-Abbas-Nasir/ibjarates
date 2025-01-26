
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
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
width:100%;
display:flex;
justify-content:center;
align-items:center;
  padding: 5rem 10rem;
  padding-bottom: 0;
  @media (max-width: 1370px) {
    padding: 2rem 2rem;
    padding-bottom: 0;
  }
  @media (max-width: 1080px) {
    padding: 5rem 4rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export default function ChartSection() {
  const containerRef = useRef(null);
  const salesData = {
    labels: [
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
    ],
    datasets: [
      {
        label: "Sales 2022",
        data: [
          1200, 1900, 3000, 2500, 2800, 3500, 4100, 4300, 2000, 3000, 3900,
          4500,
        ],
        fill: true,
        backgroundColor: "rgba(75, 29, 130, 0.2)", // Indigo fill for the chart with transparency
        borderColor: "#4B1D82", // Indigo border color
        borderWidth: 2, // Add a border width to make the line visible
        tension: 0.4, // Smooth curve
        hoverBackgroundColor: "rgba(75, 29, 130, 0.5)", // Darker indigo when hovered
        hoverBorderColor: "#4B1D82", // Keep the same border color when hovered
        hoverBorderWidth: 3, // Make the border thicker on hover
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow manual height adjustments
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw} sales`, // Format tooltip to show sales
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        ticks: {
          callback: (value: any) => `$${value / 1000}k`, // Format y-axis ticks to show sales in thousands (e.g., $1k)
        },
      },
    },
  };

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
  return (
    <>
      <Container ref={containerRef}>
        <div className="chart_section px-6 py-6 rounded-[2rem] bg-[#fff2d8] shadow-lg w-[100%] flex flex-col justify-start">
          <h3 className="text-black text-lg font-bold mb-4">Sales 2022</h3>
          <div className="text-black text-sm mb-4 flex justify-between p-5">
            <p>
              <span className="text-[3rem] font-bold">$12.7k</span>{" "}
              <span className="text-green-500">+1.3%</span> vs last year
            </p>
            <div className="flex justify-between gap-5 bg-[#fafaf8] px-[3rem] py-[0.7rem] rounded-[1rem]">
              <button className="px-3 py-1 rounded-md text-black text-sm">
                Daily
              </button>
              <button className="px-3 py-1 rounded-md text-black text-sm">
                Weekly
              </button>
              <button className="px-5 py-3 bg-[#070757] text-white rounded-[1rem] text-sm">
                Annually
              </button>
            </div>
          </div>
          {/* Chart with Reduced Height */}
          <div className="py-5" style={{ height: "550px" }}>
            {" "}
            {/* Adjust height here */}
            <Line data={salesData} options={chartOptions} />
          </div>
        </div>
      </Container>
    </>
  );
}
