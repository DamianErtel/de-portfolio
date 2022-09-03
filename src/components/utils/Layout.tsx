import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme/theme";
import GlobalStyle from "../../theme/global";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
