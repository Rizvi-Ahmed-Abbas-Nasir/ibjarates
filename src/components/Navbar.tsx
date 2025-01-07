import styled from "styled-components";

import logoimg from "../assets/Logo/ibj_logo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const Logo = styled.div`
  width: 15rem;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1080px) {
    width: 10rem;
  }
  @media (max-width: 768px) {
    width: 6rem;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Logo>
        <img src={logoimg} alt="" />
      </Logo>
    </Container>
  );
}
