import styled from "styled-components";
import Title from "../../../components/Title";
import img1 from "../../../assets/images/pungab.webp";
import img2 from "../../../assets/images/bullion.jpg";
import img3 from "../../../assets/images/ibrates.webp";
import img4 from "../../../assets/images/equites.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";


const Container = styled.div`
  padding: 0 10rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 1370px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 4rem 4rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogWrapper = styled.div`
  width: 65%;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const BlogPost = styled.div`
  background-color: #f5f3eb;
  width: 100%;
  height:55vh;
  border-radius: 0.7rem;
  overflow: hidden;
  padding: 1rem;
  .info {
    padding: 1rem;
    .subTitle {
      font-size: 0.9rem;
      opacity: 0.7;
    }
    .blog_title {
      font-size: 1.2rem;
      font-weight: 500;
      padding-bottom: 1rem;
    }
    .url {
      display: block;
      padding-top: 1rem;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height:17rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AchievementWrapper = styled.div`
  background-color: #f5f3eb;
  overflow: hidden;
  height: 55vh;
  width: calc(35% - 2rem);
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const ScrollableList = styled.div`
  border-radius: 2rem;
  overflow-y: hidden;
  height: 100%;
  position: relative;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 1rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1rem;
  color: #2d3748;
  position: relative;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AchievementTitle = styled.h3`
  font-size: 2rem;
  padding: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function Blog() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listElement = listRef.current;
    if (!listElement) return;

    const scrollHeight = listElement.scrollHeight;
    const clientHeight = listElement.clientHeight;

    let start = 0;

    const scrollInterval = setInterval(() => {
      if (listElement) {
        listElement.scrollTop = start;
        start += 1; // Adjust speed here
        if (start > scrollHeight - clientHeight) {
          start = 0; // Reset to top when scrolled to the bottom
        }
      }
    }, 50); // Adjust interval here for smoother scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <Title title="Read the Latest" />
      <Container>
        <BlogWrapper>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={40}
            loop
            autoplay={{
              delay: 1500,
            }}
          >
            <SwiperSlide>
              <BlogPost>
                <ImageWrapper>
                  <img src={img1} alt="" />
                </ImageWrapper>
                <div className="info">
                  <span className="subTitle">News</span>
                  <h3 className="blog_title"> Punjab National Bank</h3>
                  <p className="description">
                  Punjab National Bank (PNB) uses IBJA Gold rates API for their retails gold loan.
                  </p>
                  <a href="" className="url">
                    Learn More
                  </a>
                </div>
              </BlogPost>
            </SwiperSlide>
            <SwiperSlide>
              <BlogPost>
                <ImageWrapper>
                  <img src={img2} alt="" />
                </ImageWrapper>
                <div className="info">
                  <span className="subTitle">News</span>
                  <h3 className="blog_title">  India International Bullion</h3>
                  <p className="description">
                  India International Bullion Summit 2024 ( IIBS-9) 
                  </p>
                  <a href="" className="url">
                    Learn More
                  </a>
                </div>
              </BlogPost>
             
            </SwiperSlide>
            <SwiperSlide>
              <BlogPost>
                <ImageWrapper>
                  <img src={img3} alt="" />
                </ImageWrapper>
                <div className="info">
                  <span className="subTitle">News</span>
                  <h3 className="blog_title">  IBJA Rates is the India’s benchmark</h3>
                  <p className="description">
                  IBJA Rates is the India’s benchmark for Gold Rates to be referred by all NBFCs and State & Co-Op Banks as per RBI circular
                  </p>
                  <a href="" className="url">
                    Learn More
                  </a>
                </div>
              </BlogPost>
            </SwiperSlide>
            <SwiperSlide>
              <BlogPost>
                <ImageWrapper>
                  <img src={img4} alt="" />
                </ImageWrapper>
                <div className="info">
                  <span className="subTitle">News</span>
                  <h3 className="blog_title">   Equitas Small Finance </h3>
                  <p className="description">
                  Equitas Small Finance Bank Limited successfully
                  </p>
                  <a href="" className="url">
                    Learn More
                  </a>
                </div>
              </BlogPost>
            </SwiperSlide>
          </Swiper>
        </BlogWrapper>
        <AchievementWrapper>
          <AchievementTitle>Achievements</AchievementTitle>
          <ScrollableList ref={listRef}>
            <List>
              {[
                "Manage your invoices with ease",
                "Track expenses and revenues",
                "Generate financial reports",
                "Secure cloud-based storage",
                "Multi-user support with roles",
                "Integration with banking systems",
                "Real-time notifications",
                "Manage your invoices with ease",
                "Track expenses and revenues",
                "Generate financial reports",
                "Secure cloud-based storage",
                "Multi-user support with roles",
                "Integration with banking systems",
                "Real-time notifications",
              ].map((item, index) => (
                <ListItem data-count={index + 1} key={index}>
                  {item}
                </ListItem>
              ))}
            </List>
          </ScrollableList>
        </AchievementWrapper>
      </Container>
    </>
  );
}
