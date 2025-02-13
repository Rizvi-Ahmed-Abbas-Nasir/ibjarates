import gsap from "gsap";
import axios from "axios";
import { useRef } from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import Banner1 from "../../../assets/images/smaill-banner.jpg";
import Banner2 from "../../../assets/images/smaill-banner2.jpg";
import { IoMdDownload } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";
import fetchMachineKey from "../../../api/getMachineKey";

const Container = styled.div`
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 1370px) {
    padding: 0 2rem;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */

  @media (max-width: 768px) {
    justify-content: center; /* Center cards on smaller screens */
    gap: 1rem; /* Add space between cards */
  }
`;

const Card = styled.div`
  width: calc(33.3% - 2rem);
  background-color: #fff2da;
  color: #000;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column; /* Ensure proper alignment for smaller screens */
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }

  .info {
    padding: 1rem;

    width: 100%;
    .TOPTitle{
    font-size:1.5rem;
    }
    .title {
      font-weight: 600;
  
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Lighter border */
  padding-bottom: 0.5rem;
    font-size:1rem;

      padding: 0.7rem 0rem;
      display: flex;
      align-items: center;
      svg {
        font-size: 1.3rem;
        margin-left: 0.5rem;
      }
      &:first-child {
        border-top: 1px solid #0000004c;
      }
    }
  }

  @media (max-width: 1024px) {
    width: calc(50% - 1rem); /* Adjust card width for medium screens */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    margin-bottom: 1rem; /* Add space between cards */
    padding: 1.5rem; /* Adjust padding for smaller screens */
  }
`;

type Style = {
  [key: string]: string | number | Style | undefined;
};
const styles: Record<string, Style> = {
  page: {
    backgroundColor: "white",
    padding: "0px",
    display: "flex",
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
    flexDirection: "column", // Arrange children vertically
    gap: "2rem", // Gap between elements
  },
  headerPrices: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "0rem",
    marginTop: "2.5rem",
  },
  priceCard: {
    width: "100%",
    backgroundColor: "#fffae6",
    padding: "12px",
    borderRadius: ".7rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    height: "6rem",
    margin: "5px",
    border: "1px solid #ffdd99",
    opacity: 0, // Initially invisible for animation
  },
  priceCardTitle: {
    fontSize: "16px" /* Smaller text */,
    fontWeight: "bold",
  },
  priceCardValue: {
    fontSize: "22px" /* Larger font for value */,
    fontWeight: "600",
    lineHeight: "1.2" /* Maintain spacing consistency */,
  },
  MainContent: {
    width: "100%",
    gap: "2rem",
  },
  MainContentSecond: {
    width: "100%",
    gap: "2rem",
    display: "flex",
  },
  tableContainer: {
    width: "100%",
    backgroundColor: "rgb(254, 245, 230)",
    borderRadius: ".8rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ffdd99",
    textAlign: "center",
    opacity: 0, 
  },
    tableHeader: {
      width: "100%",
      justifyContent: "center",
      backgroundColor: "rgb(241 181 75 / 46%)",
      padding: "1rem",
      fontSize: "1.2rem",
      borderTopLeftRadius: ".8rem",
      borderTopRightRadius: ".8rem",
      fontWeight: "bold",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "1rem",
    },
    buttonNEXbtn: {
      display: "flex",
      gap: "0.5rem",
    },
    buttonNEX: {
      padding: "0.5rem 1rem",
      backgroundColor: "rgb(100, 181, 246)",
      borderRadius: "0.5rem",
      color: "#fff",
      fontSize: "1rem",
      cursor: "pointer",
    },
    mobile: {
      tableHeader: {
        flexDirection: "column",
        fontSize: "1rem", 
        gap: "0.8rem",
        padding: "0.8rem",
      },
      buttonNEXbtn: {
        justifyContent: "center", 
      },
    },

  table: {
    width: "100%",
    textAlign: "center",
    borderCollapse: "collapse",
  },
  tableCell: {
    padding: "20px" /* Increased padding for table height */,
    borderBottom: "1px solid #ccc",
    fontSize: "1.2rem" /* Increase font size here */,
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left", // Centers the content
    fontSize: "1.2rem", // Increased text size for footer content
    padding: "20px", // Optional padding to add space around the footer
  },
  footerIcon: {
    backgroundColor: "#ffdd99",
    padding: "8px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "self-start",
    textAlign: "left",
    fontSize: "8rem", // Increase the size of the icon
  },
  sidebarContainer: {
    width: "20%" /* Adjust the width of the sidebar container */,
    display: "flex",
    justifyContent: "flex-end",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", // align the items to the end
    alignItems: "flex-start", // align the items to the start (left)
    gap: "3rem",
    width: "100%" /* Adjusted width */,
    height: "100%" /* Increased height */,
  },
  button: {
    backgroundColor: "#fffae6",
    padding: "16px", // Adjust padding for height
    height: "6rem", // Set a specific height
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "2px solid #f8d878", // Light golden border
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s", // Add transform transition
    width: "70%", // Reduced width
    fontSize: "1.3rem", // Increased text size
  },
  buttonHover: {
    backgroundColor: "#f8d878", // Golden color for hover
  },
  arrow: {
    marginLeft: "0.5rem",
    cursor: "pointer",
    fontSize: "1.2rem",
  },

    TitleContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "2rem", // Default gap for larger screens
      flexWrap: "wrap", // Allow wrapping for small screens
    },
    Title: {
      fontWeight: "600",
      paddingBottom: "0.5rem",
      padding: "0.7rem 0",
      display: "flex",
      alignItems: "center",
      fontSize: "1.2rem", // Default font size
      gap: "0.5rem", // Space between text and icon
    },
    // Mobile-specific styles
    "@media (max-width: 768px)": {
      TitleContainer: {
        flexDirection: "column", // Stack titles vertically
        justifyContent: "flex-start", // Align items to the top
        gap: "1rem", // Reduce gap for mobile
      },
      Title: {
        fontSize: "1rem", // Adjust font size for smaller screens
        textAlign: "center", // Center-align text for better readability
      },
    },
  };
  



export default function Landing() {
  const [machineKey, setMachineKey] = useState("");
  const [data, setData] = useState(null); 
  const [PDF, setPDFata] = useState<any>([]);

  const priceCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const sidebarButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const tableContainersRef = useRef<Array<HTMLDivElement | null>>([]); 
  const [priceData, setPriceData] = useState<PriceData[]>([]); 


  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const today = new Date();
  const startDate = new Date(today.setHours(0, 0, 0, 0)); 
  const endDate = new Date(today.setHours(18, 0, 0, 0));

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const fetchData = async (machineKey: string) => {
    try {
      const response = await axios.get(`https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=GetRates&START_DATE=${formattedStartDate}&END_DATE=${formattedEndDate}&Machine_Key=${machineKey}&ACCESS_TOKEN=IBJSW3SEA73`,
      
      );

      console.log("get rates data ",response.data);
      setPriceData(response.data)

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

useEffect(() => {
  const fetchAndSetData = async () => {
    let key = await fetchMachineKey();
    if (!key) return;

    setMachineKey(key);
    let result: any = await fetchData(key);
    
    if (!result) {
      key = await fetchMachineKey();
      if (!key) return;
      setMachineKey(key);
      result = await fetchData(key);
    }

    setData(result);
  };

  fetchAndSetData();
}, []);

console.log(data);

  useEffect(() => {

    function formatDate(date: Date): string {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    
    const today = new Date();
    
    const startDate = new Date(today.setHours(0, 0, 0, 0)); 
    const endDate = new Date(today.setHours(18, 0, 0, 0)); 
    
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
  
      const fetchData = async () => {
  
        try {
          const apiKey = import.meta.env.VITE_API_KEY;

          const response = await axios.get(`https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=30DaysPdf&ACCESS_TOKEN=IBJSW3SEA73&Machine_Key=e5327cc5089680d48347ecb050d8e282`,
            {
              headers: {
                ACCESS_TOKEN: ` ${apiKey}`
               
              },
            }
          );
  
          console.log(response.data);
          setPDFata(response.data)
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 


  


  const PREFETCH = async () => {

    function formatDate(date: Date): string {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    
    const today = new Date();
    
    const startDate = new Date(today.setHours(0, 0, 0, 0)); 
    const endDate = new Date(today.setHours(18, 0, 0, 0)); 
    
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
  
    try {
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await axios.get(`https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=GetRates&START_DATE=${formattedStartDate}&END_DATE=${formattedEndDate}`,
        {
          headers: {
            ACCESS_TOKEN: ` ${apiKey}`
          },
        }
      );



      

      // console.log(response.data);
      setPriceData(response.data)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  const NEXTFETCH = async () => {
    function formatDate(date: Date): string {  
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    
    const today = new Date();
    
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    
    const startDateToday = new Date(today.setHours(0, 0, 0, 0)); 
    const endDateToday = new Date(today.setHours(18, 0, 0, 0)); 
    const startDateYesterday = new Date(yesterday.setHours(0, 0, 0, 0)); 
    const endDateYesterday = new Date(yesterday.setHours(18, 0, 0, 0)); 
    
    const formattedStartDateToday = formatDate(startDateToday);
    const formattedEndDateToday = formatDate(endDateToday);
    
    const formattedStartDateYesterday = formatDate(startDateYesterday);
    const formattedEndDateYesterday = formatDate(endDateYesterday);
  
    try {
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await axios.get(`https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=GetRates&START_DATE=${formattedStartDateYesterday}&END_DATE=${formattedEndDateYesterday}`,
       
      );

      // console.log(response.data);
      setPriceData(response.data)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    if (sidebarButtonsRef.current.length > 0) {
      gsap.fromTo(
        sidebarButtonsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      priceCardsRef.current,
      {
        opacity: 0,
        y: 30, 
      },
      {
        opacity: 1,
        y: 0, 
        stagger: 0.05, 
        duration: 0.8, 
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      tableContainersRef.current,
      {
        opacity: 0,
        y: 30, 
      },
      {
        opacity: 1,
        y: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
      }
    );
  }, []);


  //dummy value bhaiii
  const currentDate = new Date();
  
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',  
    year: 'numeric',  
    month: 'short',  
    day: 'numeric',  
    hour: 'numeric', 
    minute: 'numeric',  
    hour12: true, 
  };

  const formattedDate = currentDate.toLocaleString('en-GB', options).replace(',', '');

  const todayFormatted = currentDate.toLocaleString('en-GB', options).replace(',', '');
  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(currentDate.getDate() - 1);
  const yesterdayFormatted = yesterdayDate.toLocaleString('en-GB', options).replace(',', '');



  const jsonData: string = `[ 
    { "RateDate": "16/01/2025", "RateTime": "12AM", "Purity": "916", "GoldRate": "72106", "SilverRate": "", "Carrot": 24 },
    { "RateDate": "16/01/2025", "RateTime": "6PM", "Purity": "916", "GoldRate": "72533", "SilverRate": "", "Carrot": 22 },
    { "RateDate": "16/01/2025", "RateTime": "6PM", "Purity": "585", "GoldRate": "46323", "SilverRate": "91228", "Carrot": 18 },
    { "RateDate": "16/01/2025", "RateTime": "12AM", "Purity": "999", "GoldRate": "78718", "SilverRate": "91218", "Carrot": 16 },
    { "RateDate": "16/01/2025", "RateTime": "12AM", "Purity": "750", "GoldRate": "59039", "SilverRate": "", "Carrot": 14 },
    { "RateDate": "16/01/2025", "RateTime": "12AM", "Purity": "585", "GoldRate": "46050", "SilverRate": "91228", "Carrot": 12 },
    { "RateDate": "16/01/2025", "RateTime": "6PM", "Purity": "999", "GoldRate": "79184", "SilverRate": "91784", "Carrot": 16 },
    { "RateDate": "16/01/2025", "RateTime": "12AM", "Purity": "995", "GoldRate": "78403", "SilverRate": "", "Carrot": 16 },
    { "RateDate": "16/01/2025", "RateTime": "6PM", "Purity": "995", "GoldRate": "78867", "SilverRate": "", "Carrot": 16 },
    { "RateDate": "16/01/2025", "RateTime": "6PM", "Purity": "750", "GoldRate": "59388", "SilverRate": "", "Carrot": 16 }
  ]`;

  interface PriceData {
    RateDate: string;
    RateTime: string;
    Purity: string;
    GoldRate: string;
    SilverRate: string;
    Carrot: number;
  }
  
  function convertJsonToObjects(jsonString: string): PriceData[] {
    try {
      const data: PriceData[] = JSON.parse(jsonString);
      return data.map((item) => ({
        RateDate: item.RateDate,
        RateTime: item.RateTime,
        Purity: item.Purity,
        GoldRate: item.GoldRate ? item.GoldRate : "",
        SilverRate: item.SilverRate ? item.SilverRate : "",
        Carrot: item.Carrot
      }));
    } catch (error) {
      console.error("Invalid JSON:", error);
      return [];
    }
  }
  
  const priceObjects = convertJsonToObjects(jsonData);
  

  const goldPurityMapping = [
    { Carrot: 24 },
   
  ];
  

  return (
    <>
      <Container className="Container">
        <div style={styles.page} className="page">
        <div style={styles.headerPrices} className="headerPrices">
  {priceData.slice(0, 6).map((price, index) => (
    <div
      key={index}
      className="priceCard"
      ref={(el) => priceCardsRef.current.push(el)}
      style={styles.priceCard}
    >
      {index !== priceObjects.slice(0, 6).length - 1 ? (
        <>
         
            <div >
              <div style={styles.priceCardTitle}>{price.Carrot}K Gold</div>
            </div>
        

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={styles.priceCardValue}>₹ {price.GoldRate}.00</span>
            <span
              style={{
                color: index % 2 === 0 ? "green" : "red",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {index % 2 === 0 ? "▲" : "▼"}
            </span>
          </div>
        </>
      ) : (
        
        <div style={{ marginTop: "8px", fontWeight: "bold", fontSize: "1.5rem" }}>
                        <div style={styles.priceCardTitle}>{price.Carrot}F Sliver</div>

        ₹ {price.SilverRate ||  "Sliver Rate"}
        <span
              style={{
                color: index % 2 === 0 ? "green" : "red",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {index % 2 === 0 ? "▲" : "▼"}
            </span>
        </div>
      )}
    </div>
  ))}
</div>

          <div style={styles.MainContent} className="MainContent">
            <div style={styles.MainContentSecond} className="MainContentSecond">
              
              <div
                className="tableContainer"
                ref={(el) => tableContainersRef.current.push(el)} // Add ref to table container
                style={{ ...styles.tableContainer, width: "100%" }}
              >
                
                <div style={styles.tableHeader}>
      {formattedDate}
    </div>                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableCell}>PURITY</th>
                      <th style={styles.tableCell}>AM</th>
                      <th style={styles.tableCell}>PM</th>
                    </tr>
                  </thead>
                  <tbody>
                  {priceObjects.slice(0, 6).map((price, index) => {
  const amData = priceObjects.filter(
    (p) => p.Purity === price.Purity && p.RateTime === "12AM"
  );
  const pmData = priceObjects.filter(
    (p) => p.Purity === price.Purity && p.RateTime === "6PM"
  );

  const isLastRow = index === priceObjects.slice(0, 6).length - 1;

  if (isLastRow) {
    return (
      <tr key={index}>
        <td style={styles.tableCell}>Silver {price.Purity}</td>
        <td style={styles.tableCell}>
          {amData.length > 0 ? amData[0].SilverRate || "-" : "-"}
        </td>
        <td style={styles.tableCell}>
          {pmData.length > 0 ? pmData[0].SilverRate || "-" : "-"}
        </td>
      </tr>
    );
  }

  return (
    <tr key={index}>
      <td style={styles.tableCell}>Gold {price.Purity}</td>
      <td style={styles.tableCell}>
        {amData.length > 0 ? amData[0].GoldRate : "-"}
      </td>
      <td style={styles.tableCell}>
        {pmData.length > 0 ? pmData[0].GoldRate : "-"}
      </td>
    </tr>
  );
})}

                  </tbody>
                  
                </table>
                <div style={styles.TitleContainer}>  
                  <div style={styles.Title}>
                Download last 30 Days <IoMdDownload />
              </div>
              <div style={styles.Title} >
                IBJA Terms <IoDocumentTextOutline />
              </div></div>
              </div>

              <div
                ref={(el) => tableContainersRef.current.push(el)} // Add ref to table container
                style={{ ...styles.tableContainer, width: "100%" }}
              >
                <div style={styles.tableHeader}>
                  <span> {yesterdayFormatted}</span>
                  <div className="buttonNEXbtn">
                  <div>  <button className="buttonNEX" onClick={NEXTFETCH}>Next</button>
                  </div>
                  <div>  <button className="buttonNEX" onClick={PREFETCH}>Previous</button>
                  </div>
</div>

                </div>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableCell}>PURITY</th>
                      <th style={styles.tableCell}>AM</th>
                      <th style={styles.tableCell}>PM</th>
                    </tr>
                  </thead>
                  <tbody>
                  {priceObjects.slice(0, 6).map((price, index) => {
  const amData = priceObjects.filter(
    (p) => p.Purity === price.Purity && p.RateTime === "12AM"
  );
  const pmData = priceObjects.filter(
    (p) => p.Purity === price.Purity && p.RateTime === "6PM"
  );

  const isLastRow = index === priceObjects.slice(0, 6).length - 1;

  if (isLastRow) {
    return (
      <tr key={index}>
        <td style={styles.tableCell}>Silver {price.Purity}</td>
        <td style={styles.tableCell}>
          {amData.length > 0 ? amData[0].SilverRate || "-" : "-"}
        </td>
        <td style={styles.tableCell}>
          {pmData.length > 0 ? pmData[0].SilverRate || "-" : "-"}
        </td>
      </tr>
    );
  }

  return (
    <tr key={index}>
      <td style={styles.tableCell}>Gold {price.Purity}</td>
      <td style={styles.tableCell}>
        {amData.length > 0 ? amData[0].GoldRate : "-"}
      </td>
      <td style={styles.tableCell}>
        {pmData.length > 0 ? pmData[0].GoldRate : "-"}
      </td>
    </tr>
  );
})}

                  </tbody>
                </table>
                <div style={styles.TitleContainer}>  
                  <div style={styles.Title}>
                  List of Holidays <GrDocumentTime />
                  </div>
              <div style={styles.Title} >
               * Gold rates per 10gm & Silver rate per 1kg <IoDocumentTextOutline />
              </div></div>
              </div>
            </div>
          </div>
        </div>

        <CardsWrapper>
          <Card>
            <div className="info">
              <div className="TOPTitle">Daily Market Update</div>
              <div className="title">
                17/01/2025
              </div>
              <div className="title">
              16/01/2025
              </div>
              <div className="title">
              15/01/2025
              </div>
            </div>
          </Card>
          <Card>
            <img src={Banner1} alt="" />
          </Card>
          <Card>
            <img src={Banner2} alt="" />
          </Card>
        </CardsWrapper>
      </Container>
    </>
  );
}
