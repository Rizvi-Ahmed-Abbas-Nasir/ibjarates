import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FeatureSection: React.FC = () => {
  return (
    <div style={styles.featureSection}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        
        {/* Scrollable List */}
        <div style={styles.scrollableList}>
          <ul style={styles.list}>
            <li style={styles.listItem}>Manage your invoices with ease</li>
            <li style={styles.listItem}>Track expenses and revenues</li>
            <li style={styles.listItem}>Generate financial reports</li>
            <li style={styles.listItem}>Secure cloud-based storage</li>
            <li style={styles.listItem}>Multi-user support with roles</li>
            <li style={styles.listItem}>Integration with banking systems</li>
            <li style={styles.listItem}>Real-time notifications</li>
          </ul>
        </div>
        
   
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <img
          src="https://senseware.co.in/ibjarates/images/banners/RBI-notification-image.png"
          alt="RBI Notification"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  featureSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10rem",
    gap: "3rem",
    backgroundColor: "white",
    height: "80vh",
  },
  leftSection: {
    flex: "2 1 auto",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "3rem",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
    height: "100%",
    border:"2px solid #F0F0F0",

  },
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "1.5rem",
  },
  scrollableList: {
    flexGrow: 1,
    backgroundColor: "white",
    borderRadius: "2rem",
    overflowY: "auto",
    height: "100%",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #E2E8F0",
    fontSize: "1.5rem",
    color: "#2d3748",
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
    flex: "0 0 30%",
    borderRadius: "3rem",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "1rem",
    objectFit: "cover",
  },
};

export default FeatureSection;
