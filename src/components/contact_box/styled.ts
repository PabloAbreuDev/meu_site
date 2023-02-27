import { breakpoints } from "@/styles/theme";
import styled from "styled-components";

export const ContactBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkBlue};
  padding: 40px;
  gap: 20px;
  border-radius: 6px;

  .contact-input {
    color: #999999;
    background-color: #16161d;
    border: none;
    padding: 10px;
    border-radius: 6px;
    &:focus {
      outline: none;
    }
  }

  .contact-textarea {
    color: #999999;
    background-color: #16161d;
    border: none;
    padding: 10px;
    border-radius: 5px;
    resize: vertical;
    resize: none;
    height: 150px;
    &:focus {
      outline: none;
    }
  }

  .contact-btn-send {
    background-color: ${(props) => props.theme.colors.lightBlue};
    color: ${(props) => props.theme.colors.white};
    border-radius: 6px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: ease 0.1s;
    &:hover {
      background-color: ${(props) => props.theme.colors.black};
    }
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;
