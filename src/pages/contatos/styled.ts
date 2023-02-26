import { breakpoints } from "@/styles/theme";
import styled from "styled-components";
export const ContatosStyled = styled.section`
  .contatos-box {
    display: flex;
    gap: 30px;
    .contatos-left {
      flex: 2;
      p {
        margin-top: -20px;
        width: 90%;
      }
      .contatos-group {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-top: 40px;
      }
    }
    .contatos-right {
      flex: 2;
      margin-top: -20px;
      @media screen and (max-width: ${breakpoints.tablet}) {
        margin-top: 20px;
      }
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }
  }
`;
