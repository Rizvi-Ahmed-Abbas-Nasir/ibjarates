import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
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
    /* opacity: 0; */
    /* transform: translateY(50px); */
  }
  @media (max-width: 1370px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    margin: 2rem 0;
    margin-bottom: 1rem;
    padding: 0 4rem;
    h2 {
      font-size: 2rem;
    }
    .description {
      width: 70%;
      font-size: 0.9rem;
    }
  }
  @media (max-width: 768px) {
    margin: 2rem 0;
    margin-bottom: 1rem;
    padding: 0 1rem;
    h2 {
      font-size: 1.7rem;
    }
    .description {
      margin-top: 0.3rem;
      width: 100%;
      font-size: 0.8rem;
    }
  }
`;

const Title = ({ title }: { title?: string }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const titleSplit = SplitType.create(titleRef.current);

      gsap.set(titleSplit.words, {
        y: 70,
      });

      gsap.to(titleSplit.words, {
        y: 0,
        duration: 0.5,
        stagger: 0.03,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // gsap.to(".description", {
      //   opacity: 0.4,
      //   delay: 0.2,
      //   duration: 0.3,
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top 70%",
      //     end: "bottom bottom",
      //     toggleActions: "play none none reverse",
      //   },
      // });
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <h2 ref={titleRef}>{title}</h2>
      {/* <p className="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nesciunt
        consequuntur quod temporibus, esse sequi placeat quas accusamus culpa
        ducimus dolores cupiditate
      </p> */}
    </Container>
  );
};

export default Title;
