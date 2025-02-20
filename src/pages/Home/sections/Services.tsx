import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import editingThumbnail from "../../../assets/images/services/goldtwo.png";
import logoThumbnail from "../../../assets/images/services/goldone.png";
import photoshootThumbnail from "../../../assets/images/services/goldfour.png";
import SMMThumbnail from "../../../assets/images/services/goldthree.png";
import { Link } from "react-router-dom";

const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6rem;
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-top: 2rem;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 90%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    display: none;
  }
  h1 {
    font-size: 4rem;
    font-weight: 500;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    padding-bottom: 1rem;
    line-height: 1.6;
  }
  .more_info {
    .info {
      display: flex;
      align-items: center;
      p {
        padding: 0;
        font-size: 1rem;
        padding-bottom: 0.7rem;
      }
      .service_add_info {
        padding-right: 0.5rem;
        font-weight: 600;
        min-width: fit-content;
      }
    }
  }
  @media (max-width: 1300px) {
    h1 {
      margin-top: 1.5rem;
      font-size: 3rem;
      padding-bottom: 0.5rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
    margin-bottom: 3rem;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      display: block;
      height: 40vh;
      object-fit: cover;
      border-radius: 2rem;
    }
    h1 {
      margin-top: 1.5rem;
      font-size: 1.7rem;
      padding-bottom: 0.5rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.2;
    }
    .more_info {
      .info {
        display: block;
        p {
          padding-right: 0;
          &:last-child {
            padding-left: 0.6rem;
          }
        }
      }
    }
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  height: 70%;
  width: 80%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  overflow: hidden;
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled(Link)`
  border: 1px solid #000000b5;
  padding: 0.8rem 1.5rem;
  width: max-content;
  border-radius: 2rem;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
  }
`;

const servicesData = [
  {
    name: "IBJA GOLD PRICES ARE INDIA's BENCHMARK RATES",
    info: "Submit your trading details on www.APIGold.com & Stand a chance to win Exclusive Rewards Daily, Weekly & Monthly!",
    image: editingThumbnail,
    backgroundColor: "#F4A460",
    TextColor: "black",
    btnText: "Learn More",
  },
  {
    name: "INDIA INFORMATIVE BULLETIN ON BULLION & JEWELRY",
    info: "Submit your trading details at www.IBJAVerified.com & unlock Exclusive Rewards for Traders!.",
    image: logoThumbnail,
    backgroundColor: "#5F3A26",
    TextColor: "white",
    btnText: "Learn More ",
  },
  {
    name: "Have You Purchased GOLD/SLIVER",
    info: "Upload Your invoice on www.ibjab2c.com",
    image: photoshootThumbnail,
    backgroundColor: "#E0F7FA",
    TextColor: "black",
    btnText: "Learn More",
  },

  {
    name: "Are You a Plainum Member of IBJA",
    info: "Send a 60-90 second corporate video to IBJA for a free promotional feature.",
    image: SMMThumbnail,
    backgroundColor: "#87CEEB",
    TextColor: "black",
    btnText: "Learn More",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contents: Array<HTMLDivElement | null> = [];

  useGSAP(() => {
    let mm = gsap.matchMedia();
    const images = gsap.utils.toArray(".image:not(:first-child)");

    const body = document.body;

    mm.add("(min-width: 768px)", () => {
      gsap.set(images, { yPercent: 101 });

      const animation = gsap.to(images, {
        yPercent: 0,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageWrapperRef.current,
        scrub: true,
        animation: animation,
      });
    });

    contents.forEach((element, index) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 30%",
        end: "bottom 30%",
        onEnter: () =>
          gsap.to(body, {
            backgroundColor: servicesData[index].backgroundColor,
            color: servicesData[index].TextColor,
          }),
        onLeave: () => {
          if (index === contents.length - 1) {
            gsap.to(body, {
              backgroundColor: "#fff",
            });
          }
        },
        onLeaveBack: () => {
          if (index === 0) {
            gsap.to(body, {
              backgroundColor: "#fff",
            });
          } else {
            gsap.to(body, {
              backgroundColor: servicesData[index - 1].backgroundColor,
            });
          }
        },
      });
    });
  });

  return (
    <Conatiner ref={containerRef} id="services">
      <ContentWrapper>
        {servicesData.map((item, index) => (
          <Content
            key={item.name}
            ref={(element) => (contents[index] = element)}
          >
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>

            {/* <Button to="/quote">{item.btnText}</Button> */}
          </Content>
        ))}
      </ContentWrapper>
      <RightContainer>
        <ImageWrapper ref={imageWrapperRef}>
          {servicesData.map((item) => (
            <Image key={item.name} className="image">
              <img src={item.image} alt="" />
            </Image>
          ))}
        </ImageWrapper>
      </RightContainer>
    </Conatiner>
  );
};

export default Services;
