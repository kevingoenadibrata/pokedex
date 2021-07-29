import styled from "styled-components";
import { colors } from "./Constants/Colors";

export const BodyCss = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.gray100};
`;

export const MainContainerCss = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: ${colors.white};
  min-height: 100vh;
  overflow-y: hidden;
`;
