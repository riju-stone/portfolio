import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const styles = {
    footerContainer: `fixed bottom-0 w-screen flex justify-between text-[12px] font-normal align-end py-[1rem] px-[2rem] font-space-grotesk z-20`
  };
  const textStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";
  const date = new Date();

  return (
    <div className={styles.footerContainer + " " + textStyle}>
      <div>&copy; {date.getFullYear()}</div>
      <div>v2.0</div>
    </div>
  );
};

export default Footer;
