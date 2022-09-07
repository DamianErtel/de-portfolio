import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
  }
  html {
    font-size: 62.5%;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    @media screen and (max-width: 600px) {
      overscroll-behavior-y: none;
    }
  }
  body {
    margin: 0;
    padding: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyle;
