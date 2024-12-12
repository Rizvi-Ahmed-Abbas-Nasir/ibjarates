import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useContextProvider } from "../utils/GlobleContextProvider";
import styled from "styled-components";


const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px; /* Reduced size */
  height: 30px; /* Reduced size */
  border: 3px solid #FFD700; /* Golden border color */
  border-radius: 50%;
  pointer-events: none;
  z-index: 9995;
  background-color: #FFD700; /* Golden color */
  box-shadow: 0 0 8px 4px rgba(255, 215, 0, 0.9); /* Stronger golden shadow */
  transition: all 0.25s ease-out; /* Smooth transition for border color and shadow */
  
  /* Optional: Hide the cursor on touch devices */
  @media (pointer: coarse) {
    display: none;
  }
`;



const CursorText = styled.p`
  font-family: "Manrope", sans-serif;
  color: #fff;
  position: fixed;
  z-index: 9996;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-size: 1rem;
  font-weight: bold;
  transform: translate(-50%, -50%);
`;



const Cursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const { cursorSettings, bounds } = useContextProvider();

  const {
    size: cursorSize,
    color: cursorColor,
    isBlending: cursorBlending,
    text: cursorText,
    border: borderColor,
    blur,
  } = cursorSettings;

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX - 20,
        y: clientY - 20,
        scale: cursorSize,
        borderColor: borderColor,
        backgroundColor: cursorColor,
        mixBlendMode: cursorBlending ? "difference" : "normal",
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(textRef.current, {
        x: clientX - 15,
        y: clientY - 10,
        opacity: cursorText ? 1 : 0,
        scale: cursorText ? 1 : 0,
        duration: 0.44,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.25,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: cursorSize,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorSize]);

  return (
    <>
      <CustomCursor
  style={{
    backdropFilter: blur ? "blur(5px)" : "unset",
    borderColor: borderColor || '#FFD700',  // Make sure to pass this dynamically if needed
    backgroundColor: cursorColor || '#FFD700',  // Same for cursor color
    boxShadow: '0 0 15px 5px rgba(255, 215, 0, 0.6)',  // Golden glow shadow
  }}
  ref={cursorRef}
/>

    </>
  );
};
export default Cursor;
