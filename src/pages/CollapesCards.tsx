import React from "react";
import Title from "../components/common/Title";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 10rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
`;

const Logo = styled.div`
  img {
    width: 10rem;
    height: auto;
    object-fit: cover;
  }
`;

const SlidingCollapsingCards: React.FC = () => {
  const images = [
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Paytm-Money.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/BajajFinserv.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Central-Bank-Of-India.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Paytm-Money.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Shriram-Finance-Limited.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Paytm-Money.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/BajajFinserv.png",
    "https://senseware.co.in/ibjarates/images/API-Subsc-logo/Central-Bank-Of-India.png",
  ];

  return (
    <>
      <Title title="IBJA API Successfully Integrated" />
      <Container>
        <LogoWrapper>
          {images.map((image, index) => (
            <Logo key={index}>
              <img src={image} alt="" />
            </Logo>
          ))}
        </LogoWrapper>
      </Container>
    </>
  );
};

export default SlidingCollapsingCards;
