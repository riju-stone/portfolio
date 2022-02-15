import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// about banner styles
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
      font-size: 20rem;
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
      font-size: 4rem;
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

//aboout plane styles
export const AboutPlaneSection = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 400px;
  }
`;

export const Content = styled(motion.div)`
  width: 60%;
  font-family: "Hammersmith One", sans-serif;
  font-size: 7.2rem;
  font-weight: 600;
  margin-left: 20%;
  margin-top: 20%;
  color: ${(props) => props.theme.link};
  @media (max-width: 480px) {
    font-size: 3rem;
    width: 80%;
    margin-top: 40%;
    margin-left: 25px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 3.5rem;
    margin-top: 50%;
    margin-left: 40px;
  }
`;

// about details styles
export const AboutDetailsSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  .skill-title {
    position: absolute;
    font-weight: bolder;
    text-transform: uppercase;
    font-family: "Hammersmith One";
    color: ${(props) => props.theme.text};
    font-size: 28rem;
    z-index: 1;
  }
  .skill-container {
    width: 80%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  .skill {
    font-family: "Camar";
    margin-top: 10%;
    position: absolute;
    line-height: 0;
    font-size: 2.5rem;
    font-weight: bolder;
    text-transform: uppercase;
    color: ${(props) => props.theme.turqoise};
  }

  @media (max-width: 480px) {
    height: 400px;
    .skill-title {
      font-size: 7rem;
    }
    .skill {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
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
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};

  canvas {
    position: absolute;
    height: 100%;
    width: 100vw;
    left: 30%;
  }

  h1 {
    font-size: 7.6rem;
    position: absolute;
    width: 50%;
    left: 50px;
    z-index: 0;
  }

  @media (max-width: 480px) {
    height: 400px;
    width: 100vw;
    border: none;
    margin: 0;
    font-size: 0.8rem;
    canvas {
      position: absolute;
      left: 2%;
    }
    h1 {
      font-size: 2.2rem;
      width: 40%;
      left: 15px;
      text-align: left;
    }
  }
`;

// about timeline
export const AboutTimelineSection = styled(motion.div)`
  height: 310vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  background-color: ${(props) => props.theme.background};
  .title {
    text-transform: uppercase;
    margin: 0;
    font-family: "Hammersmith One";
    font-size: 18rem;
    font-weight: bolder;
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 480px) {
    .title {
      font-size: 4rem;
    }
  }
`;

export const TimelineView = styled(motion.div)`
  margin: 0%;
  padding: 0%;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  .timeline-card-content {
    height: auto;
    width: 40%;
    padding: 10px 15px;
    background-color: ${(props) => props.theme.darkTurqoise};
    span {
      background-color: ${(props) => props.theme.darkTurqoise};
    }
  }
  .timeline-item-title {
    font-size: 1.2rem;
    padding: 5px 10px;
    font-family: "Hammersmith One";
    background-color: ${(props) => props.theme.turqoise};
    color: ${(props) => props.theme.text};
  }
  .card-title {
    margin-bottom: 8px;
    font-size: 1.3rem;
    font-family: "Hammersmith One";
    font-weight: bolder;
    color: ${(props) => props.theme.link};
  }
  .card-subtitle {
    margin-bottom: 10px;
    font-family: "Hammersmith One";
    font-size: 1.1rem;
    color: ${(props) => props.theme.turqoise};
  }
  .card-content {
    font-size: 1rem;
    color: white;
  }
  @media (max-width: 480px) {
    .timeline-item-title {
      font-size: 0.6rem;
    }
    .timeline-card-content {
      height: 50px;
      width: 80%;
      padding: 5px 15px;
      span {
        display: none;
      }
    }
    .card-title {
      font-size: 1rem;
    }
    .card-subtitle {
      font-size: 0.8rem;
    }
    .card-content {
      line-height: 12px;
      font-size: 0.6rem;
    }
  }
`;

export const Marquee = styled.div`
  z-index: 50;
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
