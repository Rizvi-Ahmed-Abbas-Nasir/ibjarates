import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Style = React.CSSProperties;

const EsteemUserSlider: React.FC = () => {
  const styles: Record<string, Style> = {
    page: {
      backgroundColor: "white",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap:"5rem",
      flexDirection: "column",
      fontFamily: "'Roboto', sans-serif", // Apply the imported font here
    },
    APIContainer: {
      fontSize: "4rem",
      fontFamily: "'Roboto', sans-serif", // Apply the font to header
    },
    Containre: {
      backgroundColor: "white",
      overflow: "auto",
      overflowY: "scroll",
      width: "100%",
      height: "170vh",
      display: "flex",
      gap: "3rem",
      paddingTop: "5rem",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "'Roboto', sans-serif", // Apply the font to content
    },
  };

  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector("#slider") as HTMLDivElement;

    gsap.to(slidesRef.current, {
      x: () => `-${slider.scrollWidth - slider.clientWidth}px`,
      ease: "power3.out",
      scrollTrigger: {
        trigger: slider,
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onLeave: () => ScrollTrigger.getById("slider")?.kill(),
      },
    });

    const handleScroll = () => {
      slidesRef.current.forEach((slide, index) => {
        if (slide) {
          const rect = slide.getBoundingClientRect();
          const slideCenter = rect.left + rect.width / 2;
          const windowCenter = window.innerWidth / 2;

          if (Math.abs(slideCenter - windowCenter) < rect.width / 2) {
            setActiveIndex(index);
            gsap.to(slide, {
              flex: 3,
              duration: 0.6,
              ease: "power3.out",
            });
          } else {
            gsap.to(slide, {
              flex: 1,
              duration: 0.6,
              ease: "power3.out",
            });
          }
        }
      });
    };

    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getById("slider")?.kill();
    };
  }, []);

  // Array of images to display in the slider
  const images = [
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Paytm-Money.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/BajajFinserv.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Central-Bank-Of-India.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Paytm-Money.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Shriram-Finance-Limited.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/IFL.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Keertana.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/360one.png"


  ];

  return (
    <div style={styles.Containre}>
   
      <div
        id="slider"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          height: "100%",
          backgroundColor: "white",
          overflowX: "scroll",
          gap:"2rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          scrollSnapType: "x mandatory",
          padding: "3rem",
        }}
      >
           <div style={styles.page}>
        <div style={styles.APIContainer}>
          <h1>API Esteemed Users</h1>
        </div>
        <div className="w-full flex">
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            style={{
              flex: activeIndex === index ? 3 : 1,
              height: "290px",
              minWidth: "16%",
              backgroundColor: "white",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              cursor: "pointer",
              margin: "10px",
              transition: "all 0.3s ease",
              scrollSnapAlign: "center",
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                maxWidth: "100%%",
                maxHeight: "90%",
                border:"2px solid #F0F0F0",
                objectFit: "contain", // Ensures image is contained within the card
                borderRadius: "2rem",
              }}
            />
            
          </div>
          
        ))}
        </div>
              </div>

      </div>
    </div>
  );
};

export default EsteemUserSlider;
