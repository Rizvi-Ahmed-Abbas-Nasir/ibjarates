import React from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";

const FeatureSection: React.FC = () => {
  return (
    <div style={styles.featureSection}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>Accounting software that handles it all.</h2>
        <button style={styles.button}>
          SEE ALL FEATURES <FaArrowRight />
        </button>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        {/* Easy Invoicing */}
        <div style={styles.iconTitle}>
        <FaUser style={styles.icon} />
        <h3 style={styles.subHeading}>Easy Invoicing</h3>
        </div>
        <p style={styles.text}>
          Automate recurring invoices and save time by using pre-built templates.
          Get paid on time.
        </p>
      </div>
    </div>
  );
};

// Inline styles object
const styles = {
  featureSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
    gap: "5rem",
    backgroundColor: "white",
    height: "100vh",
  },
  leftSection: {
    flex: 2,
    backgroundColor: "#ffdd99",
    padding: "2rem",
    borderRadius: "3rem",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)", // Added a deeper shadow for the card
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    width: "80%",
    height: "55%",
  },
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "1.5rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "1rem",
    width: "30%",
    backgroundColor: "#2d3748",
    color: "white",
    borderRadius: "9999px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    border: "none",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "3rem",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)", // Added shadow to the card
    width: "100%",
    height: "55%",
  },
  iconTitle: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1rem",
  },
  subHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#2d3748",
  },
  icon: {
    color: "#2d3748",
    fontSize: "2rem",
  },
  text: {
    color: "#718096",
    fontSize: "1rem",
  },
};

export default FeatureSection;