import { breakpoints } from "@/styles/theme";
import styled from "styled-components";
export const HomeStyled = styled.section`
  .presentation {
    width: 65%;
    margin-bottom: 40px;
    .my-name {
      color: ${(props) => props.theme.colors.lightBlue};
    }

    .resume {
      width: 70%;
      color: ${(props) => props.theme.colors.grey};

      @media screen and (max-width: ${breakpoints.mobile}) {
        width: 100%;
      }
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
      width: 80vw;
    }

    .curriculum-button {
      background-color: ${(props) => props.theme.colors.lightBlue};
      color: ${(props) => props.theme.colors.white};
      display: inline-block;
      padding: 15px 45px;
      cursor: pointer;
      transition: ease 0.2s;
      margin-top: 10px;
      &:hover {
        background-color: ${(props) => props.theme.colors.darkBlue};
      }
    }
  }
  .habilities {
    h2 {
      display: inline-block;
      position: relative;
      font-size: 30px;
      padding-bottom: 0.5em;
      margin-bottom: 30px;

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

    .hability-cards-area {
      display: flex;

      flex-wrap: wrap;
      gap: 30px;
      margin: 0 auto;
      @media screen and (max-width: ${breakpoints.mobile}) {
        justify-content: center;
      }
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
      width: 80vw;
      display: flex;
      flex-direction: column;
    }
  }
`;
