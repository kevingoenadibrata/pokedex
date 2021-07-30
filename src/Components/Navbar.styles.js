import styled from "styled-components";
import { colors } from "../Constants/Colors";
import { PStyled } from "../Constants/Typography.styles";

export const NavbarContainerStyled = styled.div`
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

export const LogoStyled = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const PokeballIconStyled = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 4px;
`;

export const MyBagContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

export const MyBagTextStyled = styled(PStyled)`
  opacity: 1;
  font-size: 0.7rem;
  font-weight: 600;
`;
