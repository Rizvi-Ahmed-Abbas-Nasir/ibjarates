import React from "react";
import Title from "../components/common/Title";
import styled from "styled-components";
import Logo from "../assets/Logo/Bajaj_Finserv_Logo.png";

const Container = styled.div`
  padding: 0 10rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Card = styled.div`
  width: calc(33.3% - 2rem);
  background-color: #fefce8;
  padding: 1.5rem;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-style: italic;
    text-align: center;
  }
  .info_wrapper {
    margin-top: 1rem;
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    border-top: 1px solid #00000024;
    .profile_img {
      width: auto;
      height: 3rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const testimonials = [
  {
    text: "Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.",
    name: "Adrian Knoch",
    title: "easyApotheke Duderstadt",
    image: Logo, // Replace with actual image URL
  },
  {
    text: "We can map our entire sales process in Superchat's messaging software. We have a separate mailbox for each phase. That makes our work clear.",
    name: "Andreas Niemiec",
    title: "Niemiec Versicherungsmakler GmbH & Co. KG",
    image: Logo, // Replace with actual image URL
  },
  {
    text: "Our communication has been more efficient, simpler and clearer since the implementation of Superchat. Incoming customer inquiries are directly assigned to the right person, labeled and processed.",
    name: "Christian Schuder",
    title: "Porsche Zentrum Bade-Baden",
    image: Logo, // Replace with actual image URL
  },
];

const Testimonials = () => {
  return (
    <>
      <Title title="What our clients says" />

      <Container>
        <CardsWrapper>
          {testimonials.map((item, index) => (
            <Card key={index}>
              <p>{item.text}</p>
              <div className="info_wrapper">
                <div className="profile_img">
                  <img src={item.image} alt="" />
                </div>
                {/* <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="title">{item.title}</span>
                </div> */}
              </div>
            </Card>
          ))}
        </CardsWrapper>
      </Container>
    </>
  );
};

export default Testimonials;
