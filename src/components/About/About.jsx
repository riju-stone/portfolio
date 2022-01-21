import React from "react";
import { motion } from "framer-motion";
import {
  AboutSection,
  AboutBanner,
  AboutTimeline,
} from "../../styles/aboutStyles";
import TitleVideo720p from "../../assets/videos/about/about720p.mp4";
import TitleVideo1080p from "../../assets/videos/about/about1080p.mp4";

function About() {
  return (
    <AboutSection>
      <AboutBanner>
        <div id="title-container">
          <motion.svg
            id="title"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="text-mask" x="0" y="0">
                <rect x="0" y="0" />
                <motion.text
                  x="50px"
                  y="70%"
                  initial={{ y: 800 }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 1,
                    ease: [0.5, 0.05, -0.01, 0.9],
                  }}
                >
                  About Me
                </motion.text>
              </mask>
            </defs>
            <rect x="0" y="0" />
          </motion.svg>
          <motion.span
            id="sub-title"
            initial={{ y: 800 }}
            animate={{
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.5, 0.05, -0.01, 0.9],
            }}
          >
            I am where I am <br /> 'cause I've been where I've been...
          </motion.span>
          <video autoPlay muted playsInline preload="True" loop>
            <source src={TitleVideo1080p} type="video/mp4" />
          </video>
        </div>
      </AboutBanner>
      <AboutTimeline></AboutTimeline>
    </AboutSection>
  );
}

export default About;
