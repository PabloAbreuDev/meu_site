import { breakpoints } from "@/styles/theme";
import { StaticImageData } from "next/image";
import styled from "styled-components";

export const LayoutStyled = styled.div<{
  backgroundImage: StaticImageData;
  expanded: boolean;
}>`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  min-height: 100vh;

  .sidebar {
    background-image: url(${(props) => props.backgroundImage.src});
    background-size: cover;
    background-position: center;
    display: flex;

    flex-direction: column;
    .sidebar-content {
      width: 250px;
      min-height: 100vh;
      background-color: rgba(80, 80, 80, 0.1);
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
      .photo-area {
        margin-top: 50px;
        text-align: center;
        img {
          border-radius: 100%;
        }
        h3 {
          font-size: 23px;
          font-weight: 400;
          color: ${(props) => props.theme.colors.white};
        }
      }

      .menu-area {
        width: 180px;
        margin: 40px auto;
        .item-list {
          margin-bottom: 25px;
          a {
            text-decoration: none;
            color: #d8d8d8;
            i {
              margin-right: 25px;
            }
            &:hover {
              color: ${(props) => props.theme.colors.white};
            }
          }
        }
        .spacer {
          margin-bottom: 55px;
        }
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  .narbar-top {
    background-color: #2b2d41;
    display: none;

    .brand-name {
      text-decoration: none;
      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
      font-size: 1.3rem;
      margin-left: 1rem;
    }

    .navigation-menu {
      margin-left: auto;

      ul {
        display: flex;
        padding: 0;
        li {
          list-style-type: none;
          margin: 0 1rem;
          a {
            text-decoration: none;
            display: block;
            width: 100%;
            @media screen and (max-width: 768px) {
              color: ${(props) => props.theme.colors.white};
              width: 100%;
              padding: 1.5rem 0;
            }
          }

          @media screen and (max-width: 768px) {
            text-align: center;
            margin: 0;
            &:hover {
              background-color: ${(props) => props.theme.colors.lightBlue};
            }
          }
        }

        @media screen and (max-width: 768px) {
          flex-direction: column;
          position: absolute;
          left: 0;
          width: 100%;
          height: calc(100vh - 30px);
          background-color: ${(props) => props.theme.colors.darkBlue};
          display: ${(props) => (props.expanded ? "block" : "none")};
          border-top: 1px solid black;
        }
      }
    }

    .hamburger {
      // removes default border on button element
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      // positions the icon to the right and center aligns it vertically
      position: absolute;
      top: 50%;
      right: 25px;
      transform: translateY(-50%);
      display: none;

      @media screen and (max-width: ${breakpoints.mobile}) {
        display: block;
      }
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
      top: 0;
      position: fixed;
      display: flex;
      align-items: center;

      height: 30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0rem;
      color: ${(props) => props.theme.colors.black};
    }
  }

  .content {
    padding: 30px;
    margin-top: 40px; /* Add a top margin to avoid content overlay */
    color: ${(props) => props.theme.colors.white};
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
