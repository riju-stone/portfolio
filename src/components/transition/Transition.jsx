import React from "react";
import { motion } from "framer-motion";

import styles from "./Transition.module.scss";

const expandAnimation = {
  initial: {
    top: 0
  },
  enter: (i) => ({
    top: "100vh",
    transition: {
      duration: 0.7,
      delay: 0.06 * i,
      ease: [0.215, 0.61, 0.355, 1]
    },
    transitionEnd: { height: "0", top: "0" }
  }),
  exit: (i) => ({
    height: "100vh",
    transition: {
      duration: 0.7,
      delay: 0.06 * i,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const Transition = ({ children }) => {
  const columnQuantity = 6;
  return (
    <div className={styles.transitionWrapper}>
      <div className={styles.transitionContainer}>
        {[...Array(columnQuantity)].map((_, index) => {
          return (
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={expandAnimation}
              custom={columnQuantity - index}
              key={"transition-" + index}
              className={styles.transitionColumns}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default Transition;
