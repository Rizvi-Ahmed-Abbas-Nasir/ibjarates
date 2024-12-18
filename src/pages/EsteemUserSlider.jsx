import React from "react";
import img1 from "../assets/Logo/India.png";
import img2 from "../assets/Logo/ICICI.png";
import img3 from "../assets/Logo/BajajFinserv.png";
import img4 from "../assets/Logo/Paytm.png";
import img5 from "../assets/Logo/Shriram.png";
import img6 from "../assets/Logo/Keertana.png";
import img7 from "../assets/Logo/IFL.png";
import img8 from "../assets/Logo/360one.png";



// Import Roboto Flex font (via Google Fonts CDN)
const robotoFlexURL =
  "https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@800&display=swap";

const EsteemUserSlider = () => {
  const styles = {
    page: {
      backgroundColor: "white",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "'Roboto Flex', sans-serif",
    },
    APIContainer: {
      fontSize: "3.5rem",
    fontWeight: "bold",
    color: "#2d3748",
    },
    Containre: {
      backgroundColor: "white",
      width: "100%",
      height: "50vh",
      display: "flex",
      paddingTop: "5rem",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "'Roboto Flex', sans-serif",
      paddingLeft:"5rem",
      paddingRight:"5rem",
    },
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8]; // Duplicate for smooth loop

  return (
    <>
      {/* Add the font stylesheet */}
      <link href={robotoFlexURL} rel="stylesheet" />

      <div style={styles.Containre}>
        <div>
          <div style={styles.page}>
            <div style={styles.APIContainer}>
              <h1>API Esteemed Users</h1>
            </div>
            <div className="slider">
              <div className="slide-track">
                {images.concat(images).map((src, index) => (
                  <div className="slide" key={index}>
                    <img
                      src={src}
                      className="w-full h-[100%]"
                      alt={`Esteemed User ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsteemUserSlider;
