import React from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";

const FeatureSection: React.FC = () => {
  return (
    <div style={styles.featureSection}>
      <div className="w-full h-full flex gap-[3rem]">
      {/* Left Section */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>
          IBJA Rates API Adheres to CERT-in Security Policies.
        </h2>
        <a
          href="https://ibjarates.com/assets/pdf/Ibj-%20Gold-and-Silver-Rates-Web-Service-Security-Audit-Certificate-Final.pdf"
          style={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificates <FaArrowRight />
        </a>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        {/* Easy Invoicing */}
        <div style={styles.iconTitle}>
          <FaUser style={styles.icon} />
          <h3 style={styles.subHeading}>Easy Invoicing</h3>
        </div>
        <p style={styles.text}>
          Automate recurring invoices and save time by using pre-built
          templates. Get paid on time.
        </p>
      </div>
      </div>
    </div>
  );
};

const styles = {
  featureSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "7rem",
    paddingLeft: "7rem",
    paddingRight: "7rem",
    gap: "3rem",
    backgroundColor: "white",
    height: "70vh",
  },
  leftSection: {
    flex: "2 1 auto", 
    backgroundColor: "#ffdd99",
    padding: "3rem",
    borderRadius: "2rem",
    boxShadow: "0 7px 4px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    width: "50%",
    height: "100%",
  },
  heading: {
    fontSize: "3rem",
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
    textDecoration: "none", // Ensures it looks like a button
  },
  rightSection: {
    flex: "0 0 29%",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "2rem",
    boxShadow: "0 7px 4px rgba(0, 0, 0, 0.2)",
    height: "100%",
    border: "2px solid #F0F0F0",
  },
  iconTitle: {
    display: "flex",
    alignItems: "start",
    gap: "0.75rem",
    flexDirection: "column" as "column",
    marginBottom: "1rem",
  },
  subHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#2d3748",
  },
  icon: {
    color: "#2d3748",
    fontSize: "10rem",
    padding: "2rem",
  },
  text: {
    color: "#718096",
    fontSize: "1.3rem",
  },
};

export default FeatureSection;
