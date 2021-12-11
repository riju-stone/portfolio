import React, { useState, useEffect } from "react";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

//components
import Header from "./components/Header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hamburger from "./components/Hamburger/Hamburger";
import HomeBanner from "./components/Home/HomeBanner";
import HomeContent from "./components/Home/HomeContent";
import HomeFeatured from "./components/Home/HomeFeatured";

const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
  cursor: none;
}

html{
  box-sizing: border-box;
  font-size: 16px;
}

body{
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue';
  background: ${(props) => props.theme.background};
  overscroll-behaviour: none;
  overflow-x: hidden;
  padding:0;
  margin:0;
}
`;

const darkTheme = {
  background: "#152b39",
  text: "#ededed",
  link: "#f2B591",
  turqoise: "#09bd86",
  darkTurqoise: "#024959",
};

const lightTheme = {
  background: "#dddddd",
  text: "#011826",
  link: "#BF6560",
  turqoise: "#09bd86",
  darkTurqoise: "#024959",
};

function App() {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  // save the theme on localstorage
  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const onCursor = (curType) => {
    curType = (cursorStyles.includes(curType) && curType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: curType });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Hamburger
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
    </ThemeProvider>
  );
}

export default App;
