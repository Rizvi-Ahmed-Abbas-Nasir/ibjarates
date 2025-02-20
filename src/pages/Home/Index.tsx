import styled from "styled-components";
import EsteemUser from "./sections/EsteemUser";
import FeatureSection from "./sections/FeatureSection";
import UpdatesSection from "./sections/UpdatesSection";
import Integrated from "./sections/Integrated";
import Testimonials from "./sections/Testimonials";
import Landing from "./sections/Landing";
import ChartSection from "./sections/ChartSection";
import Blog from "./sections/BlogSection";
import Service from "./sections/Services";

const Container = styled.div``;

export default function HomePage() {
  return (
    <Container>
      <Landing />
      <EsteemUser />
      <Service />
      <FeatureSection />
      <Integrated />
      <UpdatesSection />
      <ChartSection />
      <Testimonials />
      <Blog />
      {/* <Achievement /> */}
      {/* <About /> */}
    </Container>
  );
}
