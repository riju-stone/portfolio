import React, { useRef, useEffect, useState } from "react";
import { easeInOut, motion, progress, useAnimationFrame } from "framer-motion";
import { useSelector } from "react-redux";

const styles = {
  loaderContainer: "h-screen w-screen overflow-hidden",
  loaderScreenWrapper:
    "absolute h-screen w-screen flex justify-center align-middle items-center text-center bg-[#E04634] z-10",
  loadingProgress: "absolute !w-full h-[2px] bg-darkbg",
  loadingPercent: "font-space-grotesk text-6xl text-lighttext bg-[#E04634] p-2 z-10"
};

const LoadingScreen = ({ setLoading }) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const backgroundStyle = theme == "dark" ? "bg-darkbg" : "bg-lightbg";
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  const progressRef = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);

  const loadingScreenAnimation = {
    show: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4
      }
    }
  };

  const loadingWrapperAnimation = {
    hidden: {
      y: window.screen.height
    },
    show: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        staggerChildren: 0.4,
        when: "beforeChildren",
        duration: 1.8
      }
    },
    exit: {
      y: -window.screen.height,
      transition: {
        ease: "easeInOut",
        duration: 0.8
      }
    }
  };

  const loadingProgressAnimation = {
    hidden: {
      x: -window.screen.width
    },
    show: {
      x: 0,
      transition: {
        ease: [0.5, 0.001, 0.08, 0.95],
        duration: 5
      }
    }
  };

  useAnimationFrame(() => {
    let progressPos = progressRef.current.getBoundingClientRect().left;
    progressPos = Math.floor(Math.abs(progressPos));
    let percent = Math.abs(progressPos - window.screen.width);
    percent = Math.floor((percent / window.screen.width) * 100);
    setProgressPercent(percent);
  });

  return (
    <motion.div
      variants={loadingScreenAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className={styles.loaderContainer + " " + backgroundStyle}
    >
      <motion.div variants={loadingWrapperAnimation} className={styles.loaderScreenWrapper}>
        <motion.div className={styles.loadingPercent}>{progressPercent}%</motion.div>
        <motion.div
          onChange={() => handleProgressBar()}
          ref={progressRef}
          className={styles.loadingProgress}
          variants={loadingProgressAnimation}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
