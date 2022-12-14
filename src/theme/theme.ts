import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  dropShadow: "filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#FFF0F3",
      contrastText: "#513E3E",
    },
    secondary: {
      main: "#513E3E",
      contrastText: "#FFF0F3",
    },
    complementary: {
      main: "#BA1200",
      contrastText: "#FFF0F3",
    },
  },
};

export default defaultTheme;
