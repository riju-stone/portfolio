import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: localStorage.getItem("theme") || "light",
    toggleButtonPos: {
      x: window.screen.width,
      y: 0
    }
  },
  reducers: {
    changeTheme: (state) => {
      if (state.currentTheme == "light") {
        state.currentTheme = "dark";
      } else {
        state.currentTheme = "light";
      }

      localStorage.setItem("currentTheme", state.currentTheme);
    },
    setThemeSwitchPos: (state, action) => {
      state.toggleButtonPos.x = action.payload.x;
      state.toggleButtonPos.y = action.payload.y;
    }
  }
});

export const { changeTheme, setThemeSwitchPos } = themeSlice.actions;
export default themeSlice.reducer;
