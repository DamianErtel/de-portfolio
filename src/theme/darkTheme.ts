import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  borderRadius: "4px",
  dropShadow: "filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#513E3E",
      contrastText: "#FFF0F3",
    },
    secondary: {
      main: "#FFF0F3",
      contrastText: "#513E3E",
    },
    complementary: {
      main: "#e83c27",
      contrastText: "#FFF0F3",
    },
  },
};

export default darkTheme;
