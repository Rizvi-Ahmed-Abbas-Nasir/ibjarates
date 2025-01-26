import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import styled from "styled-components";
import editingThumbnail from "../../../assets/images/services/1.png";
import logoThumbnail from "../../../assets/images/services/2.png";
import photoshootThumbnail from "../../../assets/images/services/3.png";
import SMMThumbnail from "../../../assets/images/services/4.png";
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
    name: "DO YOU TRADE IN GOLD OR SILVER?",
    info: "Submit your trading details on www.APIGold.com & Stand a chance to win Exclusive Rewards Daily, Weekly & Monthly!",
    image: editingThumbnail,
    backgroundColor: "#90EE90",
    addInfo: [
      {
        name: "Gold & Silver Trading Simplified:",
        info: " Hassle-free and secure trading options tailored for you.",
      },
      {
        name: "Market Insights:",
        info: " Stay ahead with real-time updates on market trends.",
      },
      {
        name: " Daily Notifications: ",
        info:"Get notified about gold and silver prices instantly.",
      },
    ],
    btnText: "Learn More",
  },
  {
    name: "DO YOU TRADE IN BULLION OR JEWELRY?",
    info: "Submit your trading details at www.IBJAVerified.com & unlock Exclusive Rewards for Traders!.",
    image: logoThumbnail,
    backgroundColor: "#ADD8E6",
    addInfo: [
      {
        name: "Certified Suppliers Only",
        info: "Trade confidently with legitimate,",
      },
      {
        name: "Exclusive Rewards",
        info: "Beautiful and user-friendly interfaces.",
      },
      {
        name: "Market Updates",
        info: "Stay informed with real-time updates on bullion prices and industry trends.",
      },
    ],
    btnText: "Learn More ",
  },
  {
    name: "IBJA BULLETIN",
    info: "Your Trusted Source for Bullion & Jewellery Industry Updates.",
    image: photoshootThumbnail,
    backgroundColor: "#FFB6C1",
    addInfo: [
      {
        name: "Stay Informed",
        info: "Get the latest insights, trends, and updates.",
      },
      {
        name: "Comprehensive Industry Analysis",
        info: "Deep dive into the challenges, opportunities",
      },
      {
        name: "Empowering Traders & Investors",
        info: "Gain a competitive edge with expert guidance",
      },
    ],
    btnText: "Learn More",
  },
 

  {
    name: "IBJA RATES API",
    info: "India's Trusted Gold and Silver Rates API",
    image: SMMThumbnail,
    backgroundColor: "#FFB6C1",
    addInfo: [
      {
        name: "Historical Data Access",
        info: "Analyze historical trends for informed decision-making.",
      },
      {
        name: "Reliable & Authentic Source",
        info: "Trusted by businesses across India",
      },
      {
        name: "Seamless Integration",
        info: "Easily integrate with your applications for live",
      },
      
    ],
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
    gsap.set(images, { clearProps: "all" });

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
            <p>{item.info}</p>
            <div className="more_info">
              {item.addInfo.map((item) => (
                <div className="info" key={item.name}>
                  <p className="service_add_info">• {item.name}:</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
            <Button to="/quote">{item.btnText}</Button>
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
