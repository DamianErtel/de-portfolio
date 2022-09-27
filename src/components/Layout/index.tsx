import React, { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme/theme";
import GlobalStyle from "../../theme/global";
import NavBar from "../NavBar";
import darkTheme from "../../theme/darkTheme";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <ThemeProvider theme={theme ? defaultTheme : darkTheme}>
      <GlobalStyle />
      <NavBar theme={theme} setTheme={setTheme} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
