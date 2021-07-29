import styled from "styled-components";
import { colors } from "../Constants/Colors";

export const NavbarContainerCss = styled.div`
  position: fixed;
  padding: 24px;
  height: 70px;
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  z-index: 5;
`;

export const LogoCss = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const PokeballIcon = styled.img`
  width: 25px;
  height: 25px;
`;
