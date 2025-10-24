import { createSlice } from "@reduxjs/toolkit";

export interface IUIState {
  language: "ua" | "en" | "ru";
  theme: "dark" | "light";
}

const initialState: IUIState = {
  language: "ua",
  theme: "light",
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language =
        state.language === "ua" ? "en" : state.language === "en" ? "ru" : "ua";
    },

    toggleTheme: (state) => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark'
    }
  },
});

export const { toggleLanguage, toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
