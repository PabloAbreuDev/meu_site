import { breakpoints } from "@/styles/theme";
import styled from "styled-components";

export const CardHabilityStyled = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 20%;
  padding: 30px 20px;
  border-radius: 3px;
  display: inline-block;

  .icon {
    color: ${(props) => props.theme.colors.lightBlue};
    font-size: 3.4em;
  }

  .title {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;
