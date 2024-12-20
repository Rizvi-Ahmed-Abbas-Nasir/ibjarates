import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SlidingCollapsingCards: React.FC = () => {
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]); // Array to hold card references
  const sliderRef = useRef<HTMLDivElement | null>(null); // Reference for the slider container

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;

      // Initialize ScrollTrigger on the slider
      ScrollTrigger.create({
        trigger: slider,
        start: "-40%", // Starts when the top of the slider hits the top of the viewport
        end: "+=0%", // End after 200% of the scroll height (adjust this if needed)
        scrub: 1, // Smoothly scrub the animation
        onUpdate: (self) => {
          const progress = self.progress; // Scroll progress from 0 to 1
          const middleIndex = Math.floor(slidesRef.current.length / 2); // Find the center index

          console.log(progress); // Debugging progress

          slidesRef.current.forEach((slide, index) => {
            if (slide) {
              const offset = index - middleIndex;

              // Animate each card's x-position and scale based on scroll progress
              gsap.to(slide, {
                x: offset * 200 * (1 - progress), // Move cards towards the center
                scale: index === middleIndex ? 1 : 1 - progress * 0.3, // Shrink other cards
                duration: 0.3,
                ease: "power4.out",
                opacity: 1, // Ensure opacity stays at 1
              });
            }
          });
        },
      });
    }
  }, []);

  // Sample slides data
  const images = [
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Paytm-Money.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/BajajFinserv.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Central-Bank-Of-India.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Paytm-Money.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Shriram-Finance-Limited.png",
    
  ];


  const styles = {
    container: {
      position: "relative" as const,
      textAlign: "center" as const, // Center the heading
      width:"100%",
      display:"flex",
      justifyContent: "center",

    },
    heading: {
      fontSize: "3rem", // Large font size
      fontWeight: "bold" as const,
      color: "#333",
      margin: "0", // Remove default margin
    },
    slider: {
      display: "flex",
      justifyContent: "center" as const,
      alignItems: "center" as const,
      height: "50vh", // Increased height for scroll area
      backgroundColor: "white",
      overflow: "hidden" as const,
      width:"100%",
      position: "relative" as 'relative', // Explicitly cast position to 'relative'
    },
    slide: {
      height: "200px",
      width: "300px",
      backgroundColor: "white",
      color: "#fff",
      display: "flex",
      justifyContent: "center" as const,
      alignItems: "center" as const,
      fontSize: "1.5rem",
      borderRadius: "10px",
      margin: "0 10px",
      position: "relative" as 'relative', // Explicitly cast position to 'relative'
      opacity: 1, // Cards initially hidden
      animation: "fadeIn 1ms", // Apply fade-in animation
      transition: "transform 0.2s ease,  0.4s ease", // Smooth transition

    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "cover" as const, // Ensures image covers the card fully
      display: "block", // Removes any unwanted spacing
      borderRadius: "2rem",

    },
  };

  return (
    <div>
      <div id="slider" ref={sliderRef} style={styles.slider}>
      <div className="w-full gap-[5rem] flex flex-col">

      <div style={styles.container}>
        <h1 style={styles.heading}>IBJA API Successfully Integrated</h1>
      </div>
<div className="flex w-full justify-center items-center">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className="card"
            style={styles.slide}
          >
            <img src={imgSrc} alt={`Slide ${index + 1}`} style={styles.image} />
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingCollapsingCards;
