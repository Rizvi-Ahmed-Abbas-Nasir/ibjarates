import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 7rem 0;
  margin-bottom: 3rem;
  padding: 0 10rem;
  h2 {
    font-size: 3rem;
    font-family: "Montserrat", serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  .description {
    margin-top: 0.5rem;
    width: 50%;
    opacity: 0.5;
  }
`;

const Title = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nesciunt
        consequuntur quod temporibus, esse sequi placeat quas accusamus culpa
        ducimus dolores cupiditate
      </p>
    </Container>
  );
};

export default Title;
