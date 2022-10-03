import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme/theme";
import GlobalStyle from "../../theme/global";
import NavBar from "../NavBar";
import darkTheme from "../../theme/darkTheme";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<boolean>(
    localStorage.getItem("theme") === "true"
  );

  const handleSetTheme = (value: boolean) => {
    localStorage.setItem("theme", value.toString());
    setTheme(localStorage.getItem("theme") === "true");
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <NavBar theme={theme} setTheme={handleSetTheme} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
