import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
//styles
import { Container } from "../../styles/globalStyles";
import {
  Nav,
  NavList,
  NavFooter,
  NavVideos,
  FooterSocial,
} from "../../styles/hamburgerStyles";
import { Flex as FooterFlex } from "../../styles/footerStyles";

// icons
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

// Videos
import AboutVideo from "../../assets/videos/about/about1080p.mp4";
import ProjectsVideo from "../../assets/videos/projects/projects1080p.mp4";
import ContactVideo from "../../assets/videos/contact/contact1080p.mp4";
import ResumeVideo from "../../assets/videos/cv/cv1080p.mp4";

// CV File
import CV from "../../assets/resume/resume.pdf"

const navRoutes = [
  {
    id: 0,
    title: "About Me",
    path: "#about",
    video: <source src={AboutVideo} type="video/mp4" />,
  },
  {
    id: 1,
    title: "My Projects",
    path: "#projects",
    video: (
      <source src={ProjectsVideo} type="video/mp4" />
    ),
  },
  {
    id: 2,
    title: "Let's Talk",
    path: "#contact",
    video: <source src={ContactVideo} type="video/mp4" />,
  },
  {
    id: 3,
    title: "Resume",
    path: "/resume",
    video: (
      <source src={ResumeVideo} type="video/mp4" />
    ),
  },
];

const Hamburger = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: <source src="assets/videos/about/about1080p.mp4" type="video/mp4" />,
    key: "0",
  });

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            animate={{ x: toggleMenu ? "0%" : "100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onMouseLeave={onCursor}
                      onHoverStart={() => {
                        onCursor("hovered");
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        });
                      }}
                      onHoverEnd={() => {
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        });
                        onCursor();
                      }}
                    >
                      {route.title === "Resume" ? (
                        <a
                          href={CV}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setToggleMenu(!toggleMenu)}
                        >
                          <motion.div
                            className="link"
                            initial={{ x: -108 }}
                            whileHover={{ x: -10 }}
                            transition={{
                              duration: 0.8,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            }}
                          >
                            <span className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                              >
                                <path
                                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                  fill="#000"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            {route.title}
                          </motion.div>
                        </a>
                      ) : (
                        <a
                          href={`${route.path}`}
                          onClick={() => setToggleMenu(!toggleMenu)}
                        >
                          <motion.div
                            className="link"
                            initial={{ x: -108 }}
                            whileHover={{ x: -10 }}
                            transition={{
                              duration: 0.8,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            }}
                          >
                            <span className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                              >
                                <path
                                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                  fill="#000"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            {route.title}
                          </motion.div>
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <FooterFlex flexEnd>
                  <FooterSocial>
                    <a
                      // ref={instaNavLink}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={() => onCursor()}
                      href="https://www.instagram.com/riju_stone/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram size={{ height: "20px" }} />
                    </a>
                    <a
                      // ref={twitterNavLink}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={() => onCursor()}
                      href="https://twitter.com/RijuStone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsTwitter size={{ height: "20px" }} />
                    </a>
                    <a
                      // ref={gitNavLink}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={() => onCursor()}
                      target="_blank"
                      href="https://github.com/riju-stone"
                      rel="noreferrer"
                    >
                      <BsGithub size={{ height: "20px" }} />
                    </a>
                  </FooterSocial>
                </FooterFlex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  transition={{ duration: 1 }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      preload="True"
                      muted
                      key={revealVideo.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeIn" }}
                      loop
                      autoPlay
                    >
                      {revealVideo.video}
                    </motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
