import styled from "styled-components";
import Logo from "../assets/Logo/ibj_logo.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  z-index: 99999999;
  background-color: #812e2a;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    width: 10rem;
    img {
      width: 100%;
    }
  }
  .loader_bar {
    width: 0%;
    height: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
`;

export default function Preloader() {
  const containerRef = useRef<any>();
  const loaderBarRef = useRef<any>();
  const logoRef = useRef<any>();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(loaderBarRef.current, {
      width: "100%",
      duration: 2,
      delay: 1,
    })
      .to(logoRef.current, {
        opacity: 0,
      })
      .to(containerRef.current, {
        y: "-100vh",
        duration: 0.3,
      });
  }, []);
  return (
    <Container ref={containerRef}>
      <div ref={logoRef} className="logo">
        <img src={Logo} alt="" />
      </div>
      <div ref={loaderBarRef} className="loader_bar"></div>
    </Container>
  );
}
