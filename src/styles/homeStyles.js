import styled from "styled-components";
import { motion } from "framer-motion";

//home banner styles
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100vw;
  position: relative;
  margin-bottom: 296px;
`;

export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  width: 100vw;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: -18px;
  color: ${(props) => props.theme.turqoise};
  pointer-events: none;
  padding: 40px 80px;
  overflow: hidden;
`;

export const Headline = styled(motion.span)`
  display: block;
  font-family: "Hammersmith One", sans-serif;
  font-size: 12rem;
  font-weight: 900;
  line-height: 1;
`;

//home content styles
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 300px;
`;

export const Content = styled.div`
  width: 53%;
  font-family: "Hammersmith One", sans-serif;
  font-size: 4.5rem;
  font-weight: 600;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
`;

//home about styles
export const HomeAboutSection = styled.div``;

export const About = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
`;

export const Services = styled(motion.div)`
  font-family: "Hammersmith One", sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme.link};
`;

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${(props) => props.theme.turqoise};
  height: 32px;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 8px 0;
`;

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${(props) => props.theme.turqoise};
    transition: 0.1s ease-in-out;
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    margin: 8px 0;
    font-size: 1rem;
    color: ${(props) => props.theme.turqoise};
    display: block;
    font-weight: 400;
  }
`;
