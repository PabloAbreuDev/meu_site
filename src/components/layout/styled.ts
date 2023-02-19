import { StaticImageData } from "next/image";
import styled from "styled-components";

export const LayoutStyled = styled.div<{ backgroundImage: StaticImageData }>`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
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
  }
  .content {
    padding: 30px;
    color: ${(props) => props.theme.colors.white};
  }
`;
