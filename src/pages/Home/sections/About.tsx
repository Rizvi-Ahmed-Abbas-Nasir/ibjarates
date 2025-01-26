import styled from "styled-components";
import Title from "../../../components/Title";

const Container = styled.div`
  padding: 0rem 10rem;

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

export default function About() {
  return (
    <>
      <Title title="About IBJA Rates" />
      <Container>
        <p className="decription">
          IBJA Gold prices are India's Benchmark rates. Authentic source for
          daily Gold and Silver prices with historical metals rates. Gold rate
          daily opening and closing rates for India.
          <br />
          <br />
          India Bullion and Jewellers Association (IBJA) is a 105 year old
          association based in Zaveri Bazar, Mumbai, India. IBJA publishes daily
          Gold opening (AM) and closing (PM) Rates. IBJA Gold rates are
          benchmark rates for issue of Sovereign Gold Bonds as per various
          notifications issued by the Ministry of Finance and Reserve Bank of
          India. IBJA Gold and Silver rates are also benchmark rates for Lending
          against Jewellery by NBFC and Bank as per RBI notifications. IBJA
          Rates are released for various purity (Gold 999, Gold 995, Gold 916,
          Gold 750, Gold 585 and Silver 999).
        </p>
      </Container>
    </>
  );
}
