import styled from "styled-components";
import Title from "../../../components/Title";
import { FaAward } from "react-icons/fa";

const CardsWrapper = styled.div`
  padding: 0 10rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 1370px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 4rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Card = styled.div`
  background-color: #fff2da;
  width: calc(25% - 1rem);
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.7rem;
  .icon {
    svg {
      font-size: 2.5rem;
    }
  }
  .info {
    padding-left: 1rem;
    .title {
      font-size: 1.3rem;
      font-weight: 500;
    }
    .description {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1080px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const data = [
  {
    icon: <FaAward />,
    title: "Top amount all",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    icon: <FaAward />,
    title: "Top amount all",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    icon: <FaAward />,
    title: "Top amount all",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    icon: <FaAward />,
    title: "Top amount all",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    icon: <FaAward />,
    title: "Top amount all",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
];

export default function Achievement() {
  return (
    <>
      <Title title="achievements" />
      <CardsWrapper>
        {data.map((item, index) => (
          <Card key={index}>
            <div className="icon">{item.icon}</div>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          </Card>
        ))}
      </CardsWrapper>
    </>
  );
}
