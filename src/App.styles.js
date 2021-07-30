import styled from "styled-components";
import { colors } from "./Constants/Colors";
import BgImg from "./Assets/bg-pattern.png";

export const BodyStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${BgImg});
  background-repeat: repeat;
  background-size: 250px;
`;

export const MainContainerStyled = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: ${colors.white};
  height: 100vh;
  overflow-y: scroll;
`;
