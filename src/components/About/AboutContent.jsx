import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Rive from "rive-react";
import { AboutContentSection, ContentSection } from "../../styles/aboutStyles";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

// RIVE Animation
import FallAnim from "../../assets/animations/fall.riv";

const AboutContent = () => {
  const isMobile = useIsMobile();
  const animation = useAnimation();

  let rootMargin;
  const [quoteRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: rootMargin,
  });

  useEffect(() => {
    rootMargin = isMobile ? "0" : "-120px";
    if (inView) {
      animation.start("visible");
    }
  }, [inView]);

  return (
    <AboutContentSection>
      <ContentSection>
        <motion.h1
          ref={quoteRef}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: {
              opacity: 0,
              x: isMobile ? 0 : -120,
            },
          }}
          initial="hidden"
          animate={animation}
        >
          - Falling nine times and getting up ten...
        </motion.h1>
        <Rive src={FallAnim} />
      </ContentSection>
    </AboutContentSection>
  );
};

export default AboutContent;
