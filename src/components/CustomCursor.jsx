import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useContextProvider } from "../utils/GlobleContextProvider";
import styled from "styled-components";

// Outer hollow circle that will follow the cursor
const OuterCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px; /* Size of the outer circle */
  height: 40px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999; /* Ensures it's above all elements */
  background-color: transparent; /* Transparent inside */
  border: 3px solid #FFD700; /* Golden border */
  transition: all 0.25s ease-out; /* Smooth transition for outer circle */
  transform: translate(-50%, -50%); /* Centered on the cursor position */

  /* Hide cursor on touch devices */
  @media (pointer: coarse) {
    display: none;
  }
`;

// Inner filled gold circle (actual mouse cursor)
const InnerCursor = styled.div`
  width: 12px; /* Size of the inner filled circle */
  height: 12px;
  background-color: #FFD700; /* Gold color */
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  z-index: 10000; /* Ensures it's above all elements */
  transition: all 0.3s ease-out;
  transform: translate(-50%, -50%); /* Centered inside the outer circle */
`;

const CursorText = styled.p`
  font-family: "Manrope", sans-serif;
  color: #fff;
  position: fixed;
  z-index: 10001; /* Ensures it's above all elements */
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
  const outerCursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const textRef = useRef(null);
  const { cursorSettings } = useContextProvider(); // Assume useContextProvider gives cursorSettings

  const {
    size: cursorSize,
    color: cursorColor,
    isBlending: cursorBlending,
    text: cursorText,
    border: borderColor,
    blur,
  } = cursorSettings;

  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Track mouse position
  const [isScrolled, setIsScrolled] = useState(false); // Flag for when the page is scrolled

  // Update scrollY value when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scrollY on scroll
      setIsScrolled(true); // Set the flag to true when scrolling occurs
    };
    window.addEventListener("scroll", handleScroll);

    // Reset the scroll flag when scroll stops
    const handleScrollStop = () => setIsScrolled(false);

    window.addEventListener("scroll", handleScrollStop, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollStop);
    };
  }, []);

  // Update mouse position when the user moves the mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsScrolled(false); // Reset the scroll flag when the user moves the mouse
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const outerCursor = outerCursorRef.current;
    const innerCursor = innerCursorRef.current;

    // Move the outer cursor (hollow circle)
    gsap.to(outerCursor, {
      x: mousePosition.x,
      y: mousePosition.y + scrollY, // Update Y-position with scrollY value
      scale: cursorSize,
      borderColor: "#FFD700", // Golden border
      backgroundColor: "transparent", // Transparent inside
      duration: 0.5,
      ease: "power2.out",
    });

    // Move the inner cursor (filled gold circle) relative to the outer cursor
    gsap.to(innerCursor, {
      x: mousePosition.x,
      y: mousePosition.y + scrollY, // Update Y-position with scrollY value
      duration: 0.3,
      ease: "power2.out",
    });

    // Move the text if cursorText is provided
    gsap.to(textRef.current, {
      x: mousePosition.x + 15,
      y: mousePosition.y + 15 + scrollY, // Update Y-position with scrollY value
      opacity: cursorText ? 1 : 0,
      scale: cursorText ? 1 : 0,
      duration: 0.44,
      ease: "power2.out",
    });
  }, [mousePosition, scrollY, cursorSize, cursorColor, cursorBlending, cursorText, borderColor]);

  useEffect(() => {
    // Remove the default system cursor on page load
    document.body.style.cursor = "none";

    // Reset the cursor on component unmount
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  // Reset the cursor position to the center of the screen if scroll happens
  useEffect(() => {
    if (isScrolled) {
      gsap.to(outerCursorRef.current, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        scale: cursorSize,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(innerCursorRef.current, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isScrolled, cursorSize]);

  return (
    <>
      {/* Outer cursor (hollow circle) */}
      <OuterCursor ref={outerCursorRef} />

      {/* Inner cursor (filled gold circle) */}
      <InnerCursor ref={innerCursorRef} />

      {/* Cursor text */}
      {cursorText && (
        <CursorText ref={textRef}>{cursorText}</CursorText>
      )}
    </>
  );
};

export default Cursor;
