import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import important_notice_logo from "../../../assets/Logo/IBJA-logo.png";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: fit-content;
  padding: 5rem;
  padding-bottom: 0;
  @media (max-width: 1370px) {
    padding: 5rem 5rem;
    padding-bottom: 0;
  }
  @media (max-width: 1080px) {
    gap: 1rem;
    padding: 2rem 2rem;
  }
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
    margin-top: 3rem;
    flex-direction: column;
  }
`;

const LeftCard = styled.div`
  background-size: cover;
  background-color: #fbdea9;
  padding: 2rem 3rem;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transform: translateY(100px);
  opacity: 0;
  h2 {
    font-size: 2.5rem;
    width: 70%;
    font-weight: 600;
    padding-bottom: 7rem;
  }
  a {
    background-color: #fff2da;
    display: flex;
    align-items: center;
    width: max-content;
    padding: 1rem 2rem;
    text-transform: uppercase;
    gap: 1rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 5;
  }
  @media (max-width: 1080px) {
    padding: 1rem 2rem;
    width: 60%;
    h2 {
      font-size: 2rem;
      width: 60%;
      padding-bottom: 5rem;
    }
    a {
      padding: 1rem 1rem;
      font-size: 0.8rem;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem 1rem;
    width: 100%;
    h2 {
      font-size: 2rem;
      width: 100%;
      padding-bottom: 5rem;
    }
    a {
      padding: 1rem 1rem;
      font-size: 0.8rem;
    }
  }
`;

const SvgWrapper = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: 16rem;
  z-index: 1;
  @media (max-width: 1080px) {
    width: 14rem;
  }
  @media (max-width: 768px) {
    width: 10rem;
  }
`;

const RightSection = styled.div`
  width: 40%;
  padding: 2rem 1.5rem;
  background-color: #fbdea9;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  gap: 2rem;
  .important_notice_logo {
    width: 7rem;
  }
  @media (max-width: 1080px) {
    width: 40%;
    padding: 1rem 1rem;
    gap: 1rem;
    .important_notice_logo {
      width: 6rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    .important_notice_logo {
      width: 5rem;
    }
  }
`;

const FeatureSection: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to([".features_left_card", ".features_right_card"], {
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
    <Container ref={containerRef}>
      <LeftCard className="features_left_card">
        <h2>IBJA Rates API Adheres to CERT-in Security Policies.</h2>
        <a
          href="https://ibjarates.com/assets/pdf/Ibj-%20Gold-and-Silver-Rates-Web-Service-Security-Audit-Certificate-Final.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificates <FaArrowRight />
        </a>
        <SvgWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 788.6063 505.46457"
            data-src="https://cdn.undraw.co/illustrations/domain-names_f0ge.svg"
            role="img"
          >
            <path
              d="M942.33387,700.8888c-10.21678-6.83513-15.36154-19.838-15.56457-32.1287-.06808-4.12168.97214-8.90006,4.6644-10.73313a6.40929,6.40929,0,0,1,9.17367,6.78517A62.0452,62.0452,0,0,1,945.908,653.2958c1.82517-3.08817,4.388-6.30229,7.96315-6.59584,4.14764-.34055,7.61254,3.6882,8.20046,7.80806s-.91111,8.22009-2.38458,12.11211a10.8304,10.8304,0,0,1,17.15884-6.08445c4.05614,3.13127,5.39282,8.89413,4.37235,13.91565s-4.01718,9.4151-7.33124,13.32331c-3.886,4.5827-8.38562,8.77056-13.773,11.43105s-11.75774,3.67806-17.48911,1.87429Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#f2f2f2"
            />
            <path
              d="M802.59173,536.29076a10.74267,10.74267,0,0,0,3.84155-16.01843l25.033-121.54-23.36007-.30784-17.384,119.99816a10.80091,10.80091,0,0,0,11.86954,17.86816Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#ffb8b8"
            />
            <path
              d="M916.376,529.97948a10.74267,10.74267,0,0,0-.89739-16.44817L904.72644,389.90678,882.253,396.289l17.64128,119.96061A10.80091,10.80091,0,0,0,916.376,529.97948Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#ffb8b8"
            />
            <polygon
              points="638.591 492.157 626.331 492.156 620.499 444.868 638.593 444.869 638.591 492.157"
              fill="#ffb8b8"
            />
            <path
              d="M617.57428,488.65334h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H602.6874a0,0,0,0,1,0,0v0A14.88688,14.88688,0,0,1,617.57428,488.65334Z"
              fill="#2f2e41"
            />
            <polygon
              points="693.591 492.157 681.331 492.156 675.499 444.868 693.593 444.869 693.591 492.157"
              fill="#ffb8b8"
            />
            <path
              d="M672.57428,488.65334h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H657.6874a0,0,0,0,1,0,0v0A14.88688,14.88688,0,0,1,672.57428,488.65334Z"
              fill="#2f2e41"
            />
            <circle cx="641.76772" cy="129.73228" r="24.56103" fill="#ffb8b8" />
            <path
              d="M881.99281,659.58678a4.33406,4.33406,0,0,1-4.23108-3.48972l-16.604-85.90651a3.34938,3.34938,0,0,0-6.61752.26635l-9.29766,83.67754a4.28546,4.28546,0,0,1-4.08458,3.82523l-13.94509.63365a4.23451,4.23451,0,0,1-3.10607-1.1271,4.27755,4.27755,0,0,1-1.39229-2.99626l-5.347-129.25883a4.28031,4.28031,0,0,1,1.50794-3.45421l3.092-2.63831a4.31148,4.31148,0,0,1,2.79486-1.02991h72.27871a4.31139,4.31139,0,0,1,4.30654,4.30654V654.6251a4.29851,4.29851,0,0,1-4.11939,4.3028l-15.05116.65514C882.11547,659.58491,882.054,659.58678,881.99281,659.58678Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#2f2e41"
            />
            <path
              d="M844.97576,536.89523c-11.68574.00094-21.98644-3.11308-27.18643-12.19438a4.38672,4.38672,0,0,1-.586-2.472l6.53388-99.87659a3.34931,3.34931,0,0,0-.679-2.25047l-18.33387-24.03831a4.305,4.305,0,0,1,.82359-6.043l27.50186-20.8355a3.36648,3.36648,0,0,0,1.19813-1.74953l.80117-2.80374a4.29778,4.29778,0,0,1,3.97523-3.12056l20.1806-.77664a4.34761,4.34761,0,0,1,3.52851,1.614l2.14766,2.68411a3.3412,3.3412,0,0,0,.996.84019l33.74952,18.65046a4.31507,4.31507,0,0,1,2.22336,3.72336l.0007.05982-.01378.057c-7.86729,32.80279-7.42477,74.26445,1.39229,130.485a4.30494,4.30494,0,0,1-2.58084,4.06355C893.34374,526.07561,866.75636,536.89523,844.97576,536.89523Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#FFF2DA"
            />
            <path
              d="M824.42414,433.87191H801.566a4.30071,4.30071,0,0,1-4.29977-4.55047c.34019-5.82336,1.01122-16.89812,1.683-25.63176.96682-12.56822,13.28153-18.7542,13.4056-18.81588l.24089-.11776,8.314,5.27757,7.73738,38.68783a4.30686,4.30686,0,0,1-4.22289,5.15047Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#FFF2DA"
            />
            <path
              d="M887.06009,431.73827a4.31245,4.31245,0,0,1-4.26028-4.7757l4.21846-38.81027,8.15-5.96916.18551.02056c.08715.01029,8.76939,1.0944,12.65888,10.81776,2.76962,6.92429,7,19.72149,9.27523,26.73363a4.30162,4.30162,0,0,1-3.08084,5.50654l-26.10817,6.35047A4.3564,4.3564,0,0,1,887.06009,431.73827Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#FFF2DA"
            />
            <path
              d="M848.02362,351.73228c5.25293-8.31094-1.30517-31.189-15.5957-31.78592-3.29932-.13781-4.56638-4.93874-5.68754-8.04446a12.38934,12.38934,0,0,1,1.61042-10.77928,20.33678,20.33678,0,0,1,8.67558-7.0083,30.10675,30.10675,0,1,1,16.86118,57.15692Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#2f2e41"
            />
            <path
              d="M699.69685,197.26772h-487a7.00778,7.00778,0,0,0-7,7v330a7.00779,7.00779,0,0,0,7,7h487a7.00779,7.00779,0,0,0,7-7v-330A7.00778,7.00778,0,0,0,699.69685,197.26772Zm5,337a5.002,5.002,0,0,1-5,5h-487a5.002,5.002,0,0,1-5-5v-330a5.002,5.002,0,0,1,5-5h487a5.002,5.002,0,0,1,5,5Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
            <rect x="1" y="28.03998" width="499" height="2" fill="#3f3d56" />
            <circle cx="18" cy="15" r="6" fill="#3f3d56" />
            <circle cx="35.25" cy="15" r="6" fill="#3f3d56" />
            <circle cx="52.5" cy="15" r="6" fill="#3f3d56" />
            <path
              d="M609.52362,293.73228h-310a15.5,15.5,0,0,1,0-31h310a15.5,15.5,0,0,1,0,31Zm-310-29a13.5,13.5,0,0,0,0,27h310a13.5,13.5,0,0,0,0-27Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
            <path
              d="M379.52362,372.73228h-60a15.5,15.5,0,0,1,0-31h60a15.5,15.5,0,0,1,0,31Zm-60-29a13.5,13.5,0,0,0,0,27h60a13.5,13.5,0,0,0,0-27Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
            <path
              d="M379.52362,424.73228h-60a15.5,15.5,0,0,1,0-31h60a15.5,15.5,0,0,1,0,31Zm-60-29a13.5,13.5,0,0,0,0,27h60a13.5,13.5,0,0,0,0-27Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
            <path
              d="M379.52362,476.73228h-60a15.5,15.5,0,0,1,0-31h60a15.5,15.5,0,0,1,0,31Zm-60-29a13.5,13.5,0,0,0,0,27h60a13.5,13.5,0,0,0,0-27Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
            <path
              d="M388.52362,285.23228h-84a7,7,0,0,1,0-14h84a7,7,0,0,1,0,14Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#FFF2DA"
            />
            <path
              d="M599.02362,281.73228a7,7,0,1,1,7-7A7.00786,7.00786,0,0,1,599.02362,281.73228Zm0-12a5,5,0,1,0,5,5A5.00573,5.00573,0,0,0,599.02362,269.73228Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
            <path
              d="M609.85224,288.0648a.99676.99676,0,0,1-.707-.293l-7.02612-7.02636a.99989.99989,0,1,1,1.41406-1.41407l7.02613,7.02637a1,1,0,0,1-.707,1.707Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
            <path
              d="M595.02362,366.73228h-34a9.5,9.5,0,0,1,0-19h34a9.5,9.5,0,0,1,0,19Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#FFF2DA"
            />
            <path
              d="M595.02362,418.73228h-34a9.5,9.5,0,0,1,0-19h34a9.5,9.5,0,0,1,0,19Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#FFF2DA"
            />
            <path
              d="M595.02362,470.73228h-34a9.5,9.5,0,0,1,0-19h34a9.5,9.5,0,0,1,0,19Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#FFF2DA"
            />
            <path
              d="M993.30315,702.73228h-248a1,1,0,0,1,0-2h248a1,1,0,0,1,0,2Z"
              transform="translate(-205.69685 -197.26772)"
              fill="#3f3d56"
            />
          </svg>
        </SvgWrapper>
      </LeftCard>
      <RightSection className="features_right_card">
        <img
          className="important_notice_logo"
          src={important_notice_logo}
          alt=""
        />
        <div className="title">Important Notice</div>
        <p>
          Any party using the IBJA Gold Price for valuation and pricing
          activities and in transactions & financial products are advised to
          subscribe IBJA rates only through OFFICIAL IBJA API (Application
          Protocol Interface)
        </p>
        <p>
          To Subscribe to IBJA Gold Rates, email:
          <a href="mailto:nagaraj.iyer@ibja.in">nagaraj.iyer@ibja.in</a>
        </p>
      </RightSection>
    </Container>
  );
};

export default FeatureSection;
