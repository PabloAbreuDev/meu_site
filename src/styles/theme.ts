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
export const breakpoints = {
  mobile: "768px",
  tablet: "1025px",
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
        font-family: "Open Sans", sans-serif;
overflow: hidden;

  }
   ::-webkit-scrollbar {
      width: 8px;
      background-color: #16161d;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.3);
    }

  .page-title
  {
   
      display: inline-block;
      position: relative;
      font-size: 30px;
      padding-bottom: 0.5em;
      margin-bottom: 50px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 65%;
        border-bottom: 4px solid #ccc;
        @media screen and (max-width: ${breakpoints.mobile}) {
          border-bottom: none;
       
      }
    }
  }
`;
