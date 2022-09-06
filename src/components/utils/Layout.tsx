import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme/theme";
import GlobalStyle from "../../theme/global";
import NavBar from "../NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <NavBar />
    {children}
  </ThemeProvider>
);

export default Layout;
