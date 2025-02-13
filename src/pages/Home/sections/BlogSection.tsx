import styled from "styled-components";
import Title from "../../../components/Title";
import img1 from "../../../assets/images/pungab.webp";
import img2 from "../../../assets/images/bullion.jpg";
import img3 from "../../../assets/images/ibrates.webp";
import img4 from "../../../assets/images/equites.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import axios from "axios";

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
    @media (max-width: 768px) {
        width: 100%;

  }
`;

const BlogPost = styled.div`
  background-color: #f5f3eb;
  width: 100%;
  height: 55vh;
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
  height: 17rem;
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

const newsDataDemo = [
  {
    NewsTitle: "Senseware",
    NewsDescription: "tests",
    NewsLink: "Senseware",
    NewsDate: "17-01-2025",
    NewsImage: img1,
  },
  {
    NewsTitle: "Senseware",
    NewsDescription: "tests",
    NewsLink: "Senseware",
    NewsDate: "17-01-2025",
    NewsImage: img2,
  },
  {
    NewsTitle: "Senseware",
    NewsDescription: "tests",
    NewsLink: "Senseware",
    NewsDate: "17-01-2025",
    NewsImage: img3,
  },
  {
    NewsTitle: "Senseware",
    NewsDescription: "tests",
    NewsLink: "Senseware",
    NewsDate: "17-01-2025",
    NewsImage: img4,
  },
];

export default function Blog() {
  const listRef = useRef<HTMLDivElement>(null);
  const [newsData, setNewsData] = useState<any>([]);

  const getData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    await axios
      .get(
        "https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=News",
        {
          headers: {
            ACCESS_TOKEN:` ${apiKey}`,
            RequestType: "News",
          },
        }
      )
      .then((response) => setNewsData(response.data));
  };

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

    // call this function and replace demo data with state data
    // getData();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <Title title="Read the Latest" />
      <Container>
        <BlogWrapper>
          <Swiper
           modules={[Autoplay]}
           loop={true} 
           autoplay={{
             delay: 1500, // Delay between slides (in ms)
             disableOnInteraction: false, // Continue autoplay after interaction
           }}
           spaceBetween={20} // Space between slides
           breakpoints={{
             768: {
               slidesPerView: 2, // Show 2 slides for screens >= 768px
             },
             0: {
               slidesPerView: 1, // Show 1 slide for smaller screens
             },
           }}
            
          >
            {newsDataDemo.map((item, index) => (
              <SwiperSlide>
                <BlogPost key={index}>
                  <ImageWrapper>
                    <img src={item.NewsImage} alt="" />
                  </ImageWrapper>
                  <div className="info">
                    <span className="subTitle">News</span>
                    <h3 className="blog_title">{item.NewsTitle}</h3>
                    <p className="description">{item.NewsDescription}</p>
                    <a href={item.NewsLink} target="_blank" className="url">
                      Learn More
                    </a>
                  </div>
                </BlogPost>
              </SwiperSlide>
            ))}
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
