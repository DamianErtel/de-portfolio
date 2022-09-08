import "styled-components";

interface IPalette {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    dropShadow: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      complementary: IPalette;
    };
  }
}
