import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(241, 181, 75, 0.46);
  margin: 5rem;
  border-radius: 1rem;
  padding: 5rem;
  @media (max-width: 1080px) {
    padding: 2rem 2rem;
    margin: 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

const Title = styled.h3`
  font-size: 3.5rem;
  width: 70%;
  font-weight: 700;
  @media (max-width: 1080px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 35rem;
  margin-top: 3rem;
  @media (max-width: 1370px) {
    /* padding: 0 5rem; */
  }

  @media (max-width: 1080px) {
    height: 25rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
  }
`;

const RightSection = styled.div`
  border-radius: 0.7rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(100px);
  opacity: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

const LeftSection = styled.div`
  flex: 2 1 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 0.7rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.063);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 100%;
  border: 2px solid #f0f0f0;
  transform: translateY(100px);
  opacity: 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem;
  }
`;

const ScrollableList = styled.div`
  flex-grow: 1;
  background-color: white;
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
  padding: 2.5rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1.5rem;
  color: #2d3748;
  position: relative;
  &::before {
    content: attr(data-count);
    font-size: 1rem;
    position: relative;
    top: 5.5rem;
    left: -1%;
  }
  @media (max-width: 1080px) {
    font-size: 1.1rem;
    padding: 1rem;
    &::before {
      content: attr(data-count);
      font-size: 0.7rem;
      position: relative;
      top: -5rem;
      left: -1%;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default function UpdatesSection() {
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

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to([".updates_left_card", ".updates_right_card"], {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Container>
      <Title>
        We activate brands across global touchpoints, from campaigns to events
        and beyond.
      </Title>
      <Section ref={containerRef}>
        <RightSection className="updates_left_card">
          <Image
            src="https://senseware.co.in/ibjarates/images/banners/RBI-notification-image.png"
            alt="RBI Notification"
          />
        </RightSection>
        <LeftSection className="updates_right_card">
          <ScrollableList ref={listRef}>
            <List>
              {[
                "Latest Notification from RBI: Alery on Gold Loan DT: 30 - sept-2024",
                "Use of IBJA rates by All NBFCs",
                "Use of IBJA rates by RRB and State & Co-op. Bank",
                "Use of IBJA rates by All Scheduled commercial Bank",
                "Use of IBJA rates for Sovereign Gold Bonds",
                "Latest Notification from RBI: Alery on Gold Loan DT: 30 - sept-2024",
                "Use of IBJA rates by All NBFCs",
                "Use of IBJA rates by RRB and State & Co-op. Bank",
                "Use of IBJA rates by All Scheduled commercial Bank",
                "Use of IBJA rates for Sovereign Gold Bonds",
              ].map((item, index) => (
                <ListItem data-count={index + 1} key={index}>
                  {item}
                </ListItem>
              ))}
            </List>
          </ScrollableList>
        </LeftSection>
      </Section>
    </Container>
  );
}
