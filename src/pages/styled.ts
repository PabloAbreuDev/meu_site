import { breakpoints } from "@/styles/theme";
import styled from "styled-components";
export const HomeStyled = styled.section`
  .presentation {
    width: 65%;
    margin-bottom: 40px;
    h1 {
      font-size: 35px;
      .my-name {
        color: ${(props) => props.theme.colors.lightBlue};
      }
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
      border-radius: 6px;
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
    .hability-cards-area {
      display: flex;

      flex-wrap: wrap;
      gap: 30px;
      margin: 0 auto;
      @media screen and (max-width: ${breakpoints.mobile}) {
        align-items: center;
      }
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
      display: flex;
      flex-direction: column;
    }
  }
`;
