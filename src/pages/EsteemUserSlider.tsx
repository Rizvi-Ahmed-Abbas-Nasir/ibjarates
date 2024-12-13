import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type Style = React.CSSProperties;

const EsteemUserSlider: React.FC = () => {

  const styles: Record<string, Style> = {
    page: {
      
      backgroundColor: "white",
      width:"100%",
      display: "flex",
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      flexDirection: "column", // Arrange children vertically
    },
    APIContainer:{
      fontSize: "3rem", // Increase the size of the ico
    },
    Containre:{
      overflow: "auto",
      overflowY: "scroll",
      width:"100%",
      height:"200vh",
      display:"flex",
      gap:"3rem",
      justifyContent:"center",
      flexDirection:"column"
    }

  }
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector("#slider") as HTMLDivElement;
  
    // Scroll-triggered animation
    gsap.to(slidesRef.current, {
      x: () => `-${slider.scrollWidth - slider.clientWidth}px`,
      ease: "power3.out",
      scrollTrigger: {
        trigger: slider,
        start: "top top",
        end: "+=1000", // Adjust the distance for unpinning
        scrub: 1,
        pin: true, // Pin temporarily during the animation
        anticipatePin: 1,
        onLeave: () => ScrollTrigger.getById("slider")?.kill(), // Unpin and cleanup after scroll
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
      ScrollTrigger.getById("slider")?.kill(); // Cleanup on unmount
    };
  }, []);
  

  return (
    <div style={styles.Containre}>
    <div style={styles.page}>
      <div style={styles.APIContainer}>
        <h1>API Esteemed Users</h1>
      </div>
    </div>
    <div
      id="slider"
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        height: "100%",
        backgroundColor: "white",
        overflowX: "scroll",
        overflow:"hidden",
        whiteSpace: "nowrap",
        scrollSnapType: "x mandatory",
        padding:"3rem",

      }}
    >
      {"Slide 1 Slide 2 Slide 3 Slide 4".split(" ").map((slide, index) => (
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          style={{
            flex: activeIndex === index ? 3 : 1,
            height: "300px",
            minWidth: "30%",
            backgroundColor: activeIndex === index ? "#555" : "#333",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
            borderRadius: "10px",
            cursor: "pointer",
            margin: "10px",
            transition: "all 0.3s ease",
            scrollSnapAlign: "center",
          }}
        >
          {slide}
        </div>
      ))}
    </div>
    </div>
  );
};

export default EsteemUserSlider;
