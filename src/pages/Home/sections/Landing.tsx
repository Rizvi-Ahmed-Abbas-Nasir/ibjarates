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
    gap: "2rem",
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
    opacity: 0, // Initially invisible for animation
  },
  tableHeader: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "rgb(241 181 75 / 46%)",
    padding: "1rem",
    borderTopLeftRadius: ".8rem",
    borderTopRightRadius: ".8rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  }
,  
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

TitleContainer:{
  width:"100%",
  display:"flex",
  justifyContent: "center",
  gap:"8rem",
},
 Title : {
  fontWeight: "600",
  paddingBottom: "0.5rem",
  padding: "0.7rem 0",
  display: "flex",
  alignItems: "center",
 
}

};

export default function Landing() {
  // const [priceData, setPriceData] = useState<any>([])
  const priceCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const sidebarButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const tableContainersRef = useRef<Array<HTMLDivElement | null>>([]); 

 useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;

        const response = await axios.get(`https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=GetRates&START_DATE=16/12/2024&END_DATE=16/12/2024`,
          {
            headers: {
              Authorization: ` ${apiKey}`,
              'Content-Type': 'application/json', 
            },
          }
        );

        console.log(response.data);
        // setPriceData(response.data)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

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
    // GSAP Animation for price cards
    gsap.fromTo(
      priceCardsRef.current,
      {
        opacity: 0,
        y: 30, // Starting position
      },
      {
        opacity: 1,
        y: 0, // End position
        stagger: 0.05, // Stagger animation
        duration: 0.8, // Duration of the animation
        ease: "power3.out",
      }
    );

    // GSAP Animation for tables
    gsap.fromTo(
      tableContainersRef.current,
      {
        opacity: 0,
        y: 30, // Starting position
      },
      {
        opacity: 1,
        y: 0, // End position
        stagger: 0.1, // Stagger animation
        duration: 0.8, // Duration of the animation
        ease: "power3.out",
      }
    );
  }, []);


  //dummy value bhaiii
  const currentDate = new Date();
  
  // Corrected options for date formatting
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

  const priceData = [
    { RateDate: "16/01/2025", RateTime: "12AM", Purity: "916", GoldRate: "72106", SilverRate: "" },
    { RateDate: "16/01/2025", RateTime: "6PM", Purity: "916", GoldRate: "72533", SilverRate: "" },
    { RateDate: "16/01/2025", RateTime: "6PM", Purity: "585", GoldRate: "46323", SilverRate: "" },
    { RateDate: "16/01/2025", RateTime: "12AM", Purity: "999", GoldRate: "78718", SilverRate: "91218" },
    { RateDate: "16/01/2025", RateTime: "12AM", Purity: "750", GoldRate: "59039", SilverRate: "" },
    { RateDate: "16/01/2025", RateTime: "12AM", Purity: "585", GoldRate: "46050", SilverRate: "" },
    { RateDate: "16/01/2025", RateTime: "6PM", Purity: "999", GoldRate: "79184", SilverRate: "91784" },
    { RateDate: "16/01/2025", RateTime: "12AM", Purity: "995", GoldRate: "78403", SilverRate: "" },
    { RateDate: "16/01/2025", RateTime: "6PM", Purity: "995", GoldRate: "78867", SilverRate: "" },
    { RateDate: "16/01/2025", RateTime: "6PM", Purity: "750", GoldRate: "59388", SilverRate: "" }
  ];

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
                {goldPurityMapping.map((price1, index) => (
                    <div  key={index} 
                    ref={(el) => priceCardsRef.current.push(el)}
>
                <div style={styles.priceCardTitle}> {price1.Carrot}K Gold</div>
                </div>
   ))}
           
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
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
                  {priceData.slice(0, 6).map((price, index) => {
                const amData = priceData.filter((p) => p.Purity === price.Purity && p.RateTime === "12AM");
                const pmData = priceData.filter((p) => p.Purity === price.Purity && p.RateTime === "6PM");

                const isSilver = price.SilverRate !== "";

                if (isSilver && index === priceData.length - 1) {
                  return (
                    <tr key={index}>
                      <td style={styles.tableCell}>Silver {price.Purity}</td>
                      <td style={styles.tableCell}>
                        {amData.length > 0 ? amData[0].SilverRate : "-"}
                      </td>
                      <td style={styles.tableCell}>
                        {pmData.length > 0 ? pmData[0].SilverRate : "-"}
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

              {/* Second Table */}
              <div
                ref={(el) => tableContainersRef.current.push(el)} // Add ref to table container
                style={{ ...styles.tableContainer, width: "100%" }}
              >
                <div style={styles.tableHeader}>
                  <span> {formattedDate}</span>
                  <div className="buttonNEXbtn">
                  <div>  <button className="buttonNEX">Next</button>
                  </div>
                  <div>  <button className="buttonNEX">Previous</button>
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
                  {priceData.slice(0, 6).map((price, index) => {
                const amData = priceData.filter((p) => p.Purity === price.Purity && p.RateTime === "12AM");
                const pmData = priceData.filter((p) => p.Purity === price.Purity && p.RateTime === "6PM");

                const isSilver = price.SilverRate !== "";

                if (isSilver && index === priceData.length - 1) {
                  return (
                    <tr key={index}>
                      <td style={styles.tableCell}>Silver {price.Purity}</td>
                      <td style={styles.tableCell}>
                        {amData.length > 0 ? amData[0].SilverRate : "-"}
                      </td>
                      <td style={styles.tableCell}>
                        {pmData.length > 0 ? pmData[0].SilverRate : "-"}
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
                IBJA Terms <IoDocumentTextOutline />
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
