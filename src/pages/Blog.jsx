import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { COLORS } from "../utils/constants";

const styles = {
  blogContainer: "h-screen flex align-middle items-center py-[4rem] px-[2rem]",
  blogTitle: "font-work-sans text-6xl ease-out duration-[0.6s]"
};

const blogSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
    }
  }
};

const titleWordAnimation = {
  hidden: {
    y: 100
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
};

const Blog = (props) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const colorStyle = theme == "dark" ? COLORS.light : COLORS.dark;
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  return (
    <motion.section className={styles.blogContainer} variants={blogSectionAnimation} initial="hidden" animate="show">
      <div className={styles.blogTitle + " " + disabledTextStyle}>
        <motion.div className="overflow-hidden h-[65px]">
          <motion.div variants={titleWordAnimation}>Still</motion.div>
        </motion.div>
        <motion.div className="overflow-hidden h-[65px]">
          <motion.div variants={titleWordAnimation}>Figuring</motion.div>{" "}
        </motion.div>
        <motion.div className="overflow-hidden h-[65px]">
          <motion.div variants={titleWordAnimation}>Out some</motion.div>{" "}
        </motion.div>
        <motion.div className="overflow-hidden h-[65px]">
          <motion.div variants={titleWordAnimation}>Stuff...</motion.div>{" "}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
