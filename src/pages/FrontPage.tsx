import React, { useEffect, useRef } from "react";
import { FaGlobe, FaWallet } from 'react-icons/fa';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../index.css"

import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

type Style = React.CSSProperties;

const FrontPage: React.FC = () => {
  const styles: Record<string, Style> = {
    page: {
      backgroundColor: "white",
      padding: "16px",
      height: "100vh", // Full height of the viewport
      display: "flex",
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      flexDirection: "column", // Arrange children vertically
      paddingLeft: "7rem", // Left padding
      paddingRight: "5rem", // Right padding
      gap: "2rem", // Gap between elements
    },
    headerPrices: {
      display: "flex",
      flexWrap: "wrap",
      width:"100%",
      justifyContent: "start",
      alignItems: "center",
      gap:"2rem",
      marginTop:"4rem"
    },
    priceCard: {
      backgroundColor: "#fffae6",
      padding: "12px", 
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      display:"flex",
      alignItems:"start",
      width: "13.5%",
      flexDirection:"column",
      justifyContent:"center",
      height:"6rem",
      margin: "5px",
      border: "1px solid #ffdd99",
      opacity: 0, // Initially invisible for animation
    },
    priceCardTitle: {
      fontSize: "16px", /* Smaller text */
      fontWeight: "bold",
    },
    priceCardValue: {
      fontSize: "22px", /* Larger font for value */
      fontWeight: "600",
      lineHeight: "1.2", /* Maintain spacing consistency */
    },
    
    tableContainer: {
      backgroundColor: "rgb(254, 245, 230)",
      borderRadius: ".8rem",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      border: "1px solid #ffdd99",
      textAlign:"center",
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
      padding: "20px", /* Increased padding for table height */
      borderBottom: "1px solid #ccc",
      fontSize: "1.2rem", /* Increase font size here */
    },
    
    buttonHover: {
      backgroundColor: "#ffedcc",
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
    sidebar: {
      display: "flex",
      flexDirection: "column",
      justifyContent:"end",
      alignItems:"start",
      gap: "3rem",
      width: "100%", /* Adjusted width */
      height: "100%", /* Increased height */
    },
    sidebarContainer: {
      width: "20%", /* Adjust the width of the sidebar container */
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      backgroundColor: "#fffae6",
      padding: "16px", // Adjust padding for height
      height: "6rem",  // Set a specific height
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      border: "2px solid #f8d878", // Light golden border
      textAlign: "center",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
      width: "70%", // Reduced width
      fontSize: "1.3rem", // Increased text size (20px)
    },
    arrow: {
      marginLeft: "0.5rem",
      cursor: "pointer",
      fontSize: "1.2rem",
    },
    
    
    
  };

  const tableContainersRef = useRef<Array<HTMLDivElement | null>>([]); // New reference for table containers

  const priceCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const sidebarButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  
  useEffect(() => {
    if (sidebarButtonsRef.current.length > 0) {
      gsap.fromTo(
        sidebarButtonsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
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
        stagger: 0.2, // Stagger animation
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
        stagger: 0.2, // Stagger animation
        duration: 0.8, // Duration of the animation
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div style={styles.page}  className="page">
      {/* Header Prices */}
    
      <div style={styles.headerPrices} className="headerPrices">
        {[7733, 7733, 7733, 7733, 7733, 7733].map((price, index) => (
          <div
            key={index}
            ref={(el) => priceCardsRef.current.push(el)} // Add ref to each price card
            style={styles.priceCard}
          >
            <div style={styles.priceCardTitle}>18K Gold</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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



      {/* Main Content */}
      <div style={{ display: "flex", gap: "2rem", width:"100%" }}>
        {/* Tables */}
        <div style={{ display: "flex", gridTemplateColumns: "2fr 3fr", gap: "2rem", flex: 2 }}>
          <div className="tableContainer"
            ref={(el) => tableContainersRef.current.push(el) } // Add ref to table container
            style={{ ...styles.tableContainer, width: "50%" }}
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

          <div
        ref={(el) => tableContainersRef.current.push(el)} // Add ref to table container
        style={{ ...styles.tableContainer, width: "70%" }}
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

        {/* Sidebar Buttons */}
        <div style={{ ...styles.sidebarContainer }}>
          <div style={styles.sidebar}>
            {["Download Last 30 Days", "IBJA Terms", "List of Holidays"].map((label, index) => (
              <button
                key={index}
                style={styles.button}
                ref={(el) => (sidebarButtonsRef.current[index] = el)} // Correct assignment of ref
                onMouseOver={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = styles.buttonHover.backgroundColor!;
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = styles.button.backgroundColor!;
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>


      </div>

      {/* Footer Info */}
      <div style={styles.footer} className="footer">
  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", width: "40%" }}>
    <FaGlobe style={{ ...styles.footerIcon, fontSize: "3.5rem" , padding:".8rem" }} />
    <span style={{ wordWrap: "break-word", maxWidth: "80%" }}>
      Get free goodies from all over the world after purchase
    </span>
  </div>

  <div  className="footerIcon" style={{ display: "flex", alignItems: "flex-start", gap: "10px", width: "40%" }}>
    <FaWallet style={{ ...styles.footerIcon, fontSize: "3.5rem" ,padding:".8rem"}} />
    <span style={{ wordWrap: "break-word", maxWidth: "80%" }}>
      Save up to 10% of every purchase you made
    </span>
  </div>
</div>



    </div>
  );
};

export default FrontPage;
