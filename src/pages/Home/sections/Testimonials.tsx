import styled from "styled-components";
import Title from "../../../components/Title";
import Logo from "../../../assets/Logo/BajajFinserv.png";
import Logo2 from "../../../assets/Logo/India.png";
import Logo3 from "../../../assets/Logo/ICICI.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchMachineKey from "../../../api/getMachineKey";

const Container = styled.div`
  padding: 0 5rem;
  @media (max-width: 1370px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    margin-top: 1rem;
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  /* width: calc(33.3% - 2rem); */
  background-color: #f5f3eb;
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
        width: 13rem;
        height: 4rem;
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
    image: Logo2, // Replace with actual image URL
  },
  {
    text: "Our communication has been more efficient, simpler and clearer since the implementation of Superchat. Incoming customer inquiries are directly assigned to the right person, labeled and processed.",
    name: "Christian Schuder",
    title: "Porsche Zentrum Bade-Baden",
    image: Logo3, // Replace with actual image URL
  },
];

type TestimonialResType = {
  CompanyName: string;
  CompanyDescription: string;
  CompanyImage: string;
};

export default function Testimonials() {
  const [testimonial, setTestimonial] = useState<TestimonialResType[]>([]);
  const [machineKey, setMachineKey] = useState("");

  const fetchData = async (machineKey: string) => {
    try {
      const response = await axios.get(
        `https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=APIEsteemedUsers&Machine_Key=${machineKey}&ACCESS_TOKEN=IBJSW3SEA73`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      let key = await fetchMachineKey();
      if (!key) return;

      setMachineKey(key);
      let result = await fetchData(key);

      if (!result) {
        key = await fetchMachineKey();
        if (!key) return;
        setMachineKey(key);
        result = await fetchData(key);
      }

      setTestimonial(result);
    };

    fetchAndSetData();
  }, []);

  console.log(testimonial);

  return (
    <>
      <Title title="What our clients says" />

      <Container>
        <CardsWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              1080: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide>
                <Card key={index}>
                  <p>{item.text}</p>
                  <div className="info_wrapper">
                    <div className="profile_img">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardsWrapper>
      </Container>
    </>
  );
}
