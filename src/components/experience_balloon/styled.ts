import { breakpoints } from "@/styles/theme";
import styled from "styled-components";

export const ExperienceBalloonStyled = styled.div`
  display: flex;
  gap: 55px;

  .experience-photo {
    position: relative; /* torna a bola um container relativo */
    img {
      border-radius: 100%;
      width: 200px;
      height: 200px;
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  .experience-content {
    .experience-duration {
      font-weight: bold;
      margin-bottom: 20px;
    }

    .experience-title {
      font-size: 22px;
      margin-bottom: -10px;
    }
  }
`;
