import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import img1 from "../../../assets/Logo/India.png";
import img2 from "../../../assets/Logo/ICICI.png";
import img3 from "../../../assets/Logo/BajajFinserv.png";
import img4 from "../../../assets/Logo/Paytm.png";
import img5 from "../../../assets/Logo/Shriram.png";
import img6 from "../../../assets/Logo/Keertana.png";
import img7 from "../../../assets/Logo/IFL.png";
import img8 from "../../../assets/Logo/360one.png";

const Title = styled.div`
  margin: 3rem 0rem;
  display: flex;
  justify-content: center;
  h3 {
    text-align: center;
    width: 60%;
    font-size: 2rem;
    font-weight: 600;
  }
  @media (max-width: 1080px) {
    h3 {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    h3 {
      width: 100%;
      font-size: 1.3rem;
    }
  }
`;

const Container = styled.div`
  padding: 4rem 5rem;
  background-color: #fff2da;
  display: flex;
  margin-top: 5rem;
  gap: 3rem;
  @media (max-width: 1370px) {
    padding: 0 5rem;
    padding-bottom: 5rem;
  }
  @media (max-width: 1080px) {
    padding: 3rem 3rem;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  width: 50%;
  &:last-child {
    border-left: 1px solid #0000002e;
  }
  .about_info {
    display: flex;
    justify-content: center;
    p {
      width: 90%;
      text-align: center;
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
    &:last-child {
      border-left: none;
    }
  }
  @media (max-width: 768px) {
    .about_info {
      p {
        width: 100%;
      }
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
  @media (max-width: 768px) {
    justify-content: start;
    gap: 1rem;
  }
`;

const Logo = styled.div`
  transform: translateY(100px);
  opacity: 0;
  img {
    /* width: 10rem; */
    height: auto;
    object-fit: cover;
  }
`;

const images = [
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

export default function Integrated() {
  const containerRef = useRef(null);
  const [ApiIntegrated, setApiIntegrated] = useState<any>([]);

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
      .then((response) => setApiIntegrated(response.data));
  };

  useEffect(() => {
    gsap.to(".API_logo", {
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

    // Replace images with data
    //getData();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Title>
            <h3>IBJA API has been successfully integrated with</h3>
          </Title>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={40}
            loop
            autoplay={{
              delay: 1500,
            }}
          >
            <LogoWrapper>
              {images.map((image, index) => (
                <SwiperSlide>
                  <Logo key={index} className="API_logo">
                    <img src={image.imgUrl} alt="" />
                  </Logo>
                </SwiperSlide>
              ))}
            </LogoWrapper>
          </Swiper>
        </Content>
        <Content>
          <Title>
            <h3>About Us</h3>
          </Title>
          <div className="about_info">
            <p>
              IBJA Gold prices are India's Benchmark rates. Authentic source for
              daily Gold and Silver prices with historical metals rates. Gold
              rate daily opening and closing rates for India. India Bullion and
              Jewellers Association (IBJA) is a 105 year old association based
              in Zaveri Bazar, Mumbai, India. IBJA publishes daily Gold opening
              (AM) and closing (PM) Rates. IBJA Gold rates are benchmark rates
              for issue of Sovereign Gold Bonds as per various notifications
              issued by the Ministry of Finance and Reserve Bank of India. IBJA
              Gold and Silver rates are also benchmark rates for Lending against
              Jewellery by NBFC and Bank as per RBI notifications. IBJA Rates
              are released for various purity (Gold 999, Gold 995, Gold 916,
              Gold 750, Gold 585 and Silver 999).
            </p>
          </div>
        </Content>
      </Container>
    </>
  );
}
