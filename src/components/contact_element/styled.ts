import styled from "styled-components";

export const ContactElementStyled = styled.div`
  .clickable-contact {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    .contact-icon {
      display: inline-block;
      padding: 20px 35px;
      background-color: ${(props) => props.theme.colors.darkBlue};
      border-radius: 6px;
    }

    .contact-infos {
      .contact-title {
        font-weight: bold;
      }
    }
  }
`;
