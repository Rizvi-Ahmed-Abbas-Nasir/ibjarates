import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useContextProvider } from "../utils/GlobleContextProvider";
import styled from "styled-components";

// Outer hollow circle
const OuterCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  border: 3px solid #ffd700;
  background-color: transparent;
  transform: translate(-50%, -50%);

  @media (pointer: coarse) {
    display: none;
  }
`;

// Inner filled circle
const InnerCursor = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ffd700;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
`;

// Cursor Text
const CursorText = styled.p`
  font-family: "Manrope", sans-serif;
  color: #fff;
  position: fixed;
  z-index: 10001;
  pointer-events: none;
  font-size: 1rem;
  font-weight: bold;
  transform: translate(-50%, -50%);
`;

const Cursor = () => {
  const outerCursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const textRef = useRef(null);
  const { cursorSettings } = useContextProvider();

  const { size: cursorSize, text: cursorText } = cursorSettings;

  // Track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animate cursor position
  useEffect(() => {
    gsap.to(outerCursorRef.current, {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: cursorSize || 1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(innerCursorRef.current, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0, // Even faster for the inner cursor
      ease: "none",
    });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: mousePosition.x + 15,
        y: mousePosition.y + 15,
        opacity: cursorText ? 1 : 0,
        duration: 0.1, // Faster text movement
        ease: "power2.out",
      });
    }
  }, [mousePosition, cursorSize, cursorText]);

  // Remove default system cursor
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <OuterCursor ref={outerCursorRef} />
      <InnerCursor ref={innerCursorRef} />
      {cursorText && <CursorText ref={textRef}>{cursorText}</CursorText>}
    </>
  );
};

export default Cursor;
