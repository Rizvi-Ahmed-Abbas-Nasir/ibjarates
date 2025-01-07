import gsap from "gsap";
import { useEffect, useRef } from "react";
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
    .title {
      font-weight: 600;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #0000004c;
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
    backgroundColor: "rgb(241 181 75 / 46%)",
    padding: "1rem",
    borderTopLeftRadius: ".8rem",
    borderTopRightRadius: ".8rem",
    fontWeight: "bold",
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
};

export default function Landing() {
  const priceCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const sidebarButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const tableContainersRef = useRef<Array<HTMLDivElement | null>>([]); // New reference for table containers

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

  return (
    <>
      <Container className="Container">
        <div style={styles.page} className="page">
          {/* Header Prices */}

          <div style={styles.headerPrices} className="headerPrices">
            {[7733, 7733, 7733, 7733, 7733, 7733].map((price, index) => (
              <div
                key={index}
                className="priceCard"
                ref={(el) => priceCardsRef.current.push(el)}
                style={styles.priceCard}
              >
                <div style={styles.priceCardTitle}>18K Gold</div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={styles.priceCardValue}>₹ {price}.00</span>
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
            {/* Tables */}
            <div style={styles.MainContentSecond} className="MainContentSecond">
              {/* First Table */}
              <div
                className="tableContainer"
                ref={(el) => tableContainersRef.current.push(el)} // Add ref to table container
                style={{ ...styles.tableContainer, width: "100%" }}
              >
                <div style={styles.tableHeader}>7-DEC - 1:45PM</div>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableCell}>PURITY</th>
                      <th style={styles.tableCell}>AM</th>
                      <th style={styles.tableCell}>PM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(6)].map((_, index) => (
                      <tr key={index}>
                        <td style={styles.tableCell}>GOLD 999</td>
                        <td style={styles.tableCell}>40735</td>
                        <td style={styles.tableCell}>40735</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Second Table */}
              <div
                ref={(el) => tableContainersRef.current.push(el)} // Add ref to table container
                style={{ ...styles.tableContainer, width: "100%" }}
              >
                <div style={styles.tableHeader}>
                  <span>Previous Dates Rate</span>
                  <span>
                    <span style={styles.arrow}>▲</span>
                    <span style={styles.arrow}>▼</span>
                  </span>
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
                    {[...Array(6)].map((_, index) => (
                      <tr key={index}>
                        <td style={styles.tableCell}>GOLD 999</td>
                        <td style={styles.tableCell}>40735</td>
                        <td style={styles.tableCell}>40735</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <CardsWrapper>
          <Card>
            <div className="info">
              <div className="title">
                Download last 30 Days <IoMdDownload />
              </div>
              <div className="title">
                IBJA Terms <IoDocumentTextOutline />
              </div>
              <div className="title">
                List of Holidays <GrDocumentTime />
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
