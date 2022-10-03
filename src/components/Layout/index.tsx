import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme/theme";
import GlobalStyle from "../../theme/global";
import NavBar from "../NavBar";
import darkTheme from "../../theme/darkTheme";
import useLocalStorage from "../../hooks/useLocalStorage";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { storage: theme, handleSetStorage: setTheme } =
    useLocalStorage("theme");

  return (
    <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      {theme !== null && (
        <>
          <NavBar theme={theme} setTheme={setTheme} />
          {children}
        </>
      )}
    </ThemeProvider>
  );
};

export default Layout;
