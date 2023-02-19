import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      lightBlue: string;
      darkBlue: string;
      white: string;
      grey: string;
    };
  }
}

export const darkTheme: DefaultTheme = {
  colors: {
    black: "#16161D",
    lightBlue: "#4E4E94",
    darkBlue: "#2B2D41",
    white: "#FFFFFF",
    grey: "#999999",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
        font-family: "Open Sans", sans-serif;
  }
`;
