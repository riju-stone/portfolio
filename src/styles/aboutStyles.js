import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled(motion.div)`
  padding: 0%;
  margin: 0%;
  overflow: hidden;
`;

export const AboutBannerSection = styled(motion.div)`
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  #title-container {
    overflow-y: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    #title {
      font-family: "Hammersmith One";
      position: absolute;
      top: 0;
      left: 0;
      fill: ${(props) => props.theme.text};
      font-size: 16rem;
      font-weight: bolder;
      height: 100%;
      width: 100%;
      overflow-y: hidden;
      rect {
        fill: ${(props) => props.theme.background};
        height: 100vh;
        width: 100vw;
        mask: url(#text-mask);
      }
    }
    video {
      object-fit: cover;
      height: 100vh;
      width: 100vw;
      z-index: -99;
    }
    #sub-title {
      overflow-y: hidden;
      position: absolute;
      bottom: 100px;
      left: 50px;
      font-family: "Monteserrat";
      font-weight: 600;
      font-size: 3rem;
      color: ${(props) => props.theme.turqoise};
    }
  }
  @media (max-width: 480px) {
    #title-container {
      #title {
        font-size: 4.2rem;
      }
      #sub-title {
        font-size: 1.2rem;
        bottom: 70px;
        left: 30px;
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    #title-container {
      #title {
        font-size: 9rem;
      }
      #sub-title {
        font-size: 2.6rem;
        bottom: 70px;
      }
    }
  }
`;

export const Marquee = styled.div`
  z-index: 50;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
  p {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.link};
    line-height: 0;
  }
  #upper {
    font-family: "Bungee Outline";
    font-weight: bolder;
    font-size: 18rem;
  }
  #lower {
    font-family: "Bungee Outline";
    font-weight: bolder;
    font-size: 15rem;
  }
  #author {
    margin: 10px 0px;
    font-family: "Hammersmith One";
    font-weight: bolder;
    font-size: 4rem;
  }
  @media (max-width: 480px) {
    padding: 50px 0px;
    height: auto;
    width: 100vw;
    #upper {
      font-size: 3rem;
    }
    #lower {
      font-size: 2.8rem;
    }
    #author {
      font-size: 1.6rem;
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    #upper {
      font-size: 6.5rem;
    }
    #lower {
      font-size: 5.5rem;
    }
    #author {
      font-size: 2.8rem;
    }
  }
`;

export const ContentSection = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Hammersmith One";
  font-size: 2.6rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};

  canvas {
    position: absolute;
    height: 100%;
    width: 100vw;
    left: 30%;
  }

  h1 {
    position: absolute;
    width: 50%;
    left: 50px;
    z-index: 0;
  }

  @media (max-width: 480px) {
    height: 400px;
    width: 100vw;
    border: none;
    padding: 50px 0px;
    margin: 0;
    font-size: 0.8rem;
    canvas {
      position: absolute;
      left: 0px;
    }
    h1 {
      width: 35%;
      left: 15px;
      text-align: left;
    }
  }
`;

export const AboutTimeline = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  z-index: 50;
  background-color: ${(props) => props.theme.background};
`;
