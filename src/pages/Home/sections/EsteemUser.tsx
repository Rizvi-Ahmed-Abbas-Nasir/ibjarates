import styled from "styled-components";

import img1 from "../../../assets/Logo/India.png";
import img2 from "../../../assets/Logo/ICICI.png";
import img3 from "../../../assets/Logo/BajajFinserv.png";
import img4 from "../../../assets/Logo/Paytm.png";
import img5 from "../../../assets/Logo/Shriram.png";
import img6 from "../../../assets/Logo/Keertana.png";
import img7 from "../../../assets/Logo/IFL.png";
import img8 from "../../../assets/Logo/360one.png";
import Title from "../../../components/Title";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";

const Container = styled.div``;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  /* gap: 3rem; */
  padding: 0 10rem;
  row-gap: 2rem;
  @media (max-width: 1370px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    row-gap: 1rem;
    padding: 0 4rem;
    margin-top: 3rem;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SliderCard = styled.div`
  width: auto;
  opacity: 0;
  transform: translateY(100px);
  border-right: 1px solid #ffcd709e;
  padding: 3rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1080px) {
    padding: 2rem;
  }
  @media (max-width: 1080px) {
    padding: 1rem;
    padding-left: 0;
    margin-right: 1rem;
  }
`;

const data = [
  {
    imgUrl: img1,
  },
  {
    imgUrl: img2,
  },
  {
    imgUrl: img3,
  },
  {
    imgUrl: img4,
  },
  {
    imgUrl: img5,
  },
  {
    imgUrl: img6,
  },
  {
    imgUrl: img7,
  },
  {
    imgUrl: img8,
  },
];

export default function EsteemUser() {
  const containerRef = useRef(null);
  const [APIEsteemedUsers, setAPIEsteemedUsers] = useState<any>([]);

  const getData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    await axios
      .get(
        "https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=APIEsteemedUsers",
        {
          headers: {
            ACCESS_TOKEN: ` ${apiKey}`,
            RequestType: "Testimonial",
          },
        }
      )
      .then((response) => setAPIEsteemedUsers(response.data));
  };

  useEffect(() => {
    gsap.to(".esteemed_card", {
      y: 0,
      opacity: 1,
      stagger: 0.04,
      duration: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // call this function and replace data with APIEsteemedUsers
    // getData()
  }, []);

  return (
    <>
      <Title title="API Esteemed Users" />
      <Container ref={containerRef}>
        <SliderWrapper>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            loop
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              1080: {
                slidesPerView: 6,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide>
                <SliderCard key={index} className="esteemed_card">
                  <img src={item.imgUrl} alt="" />
                </SliderCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderWrapper>
      </Container>
    </>
  );
}
