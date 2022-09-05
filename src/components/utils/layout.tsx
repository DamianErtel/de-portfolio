import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme/theme";
import GlobalStyle from "../../theme/global";
import NavBar from "../NavBar";

interface LayoutProps {
  children: ReactNode;
  location: Location;
}

const Layout = ({ children, location }: LayoutProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <NavBar location={location} />
    {children}
  </ThemeProvider>
);

export default Layout;
