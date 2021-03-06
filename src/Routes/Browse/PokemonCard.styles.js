import styled, { keyframes } from "styled-components";
import { colors } from "../../Constants/Colors";
import PokeballImg from "../../Assets/pokeball-bg.png";

const pokeballTurnAnimation = keyframes`
  from{
    transform: translateX(-60px) rotate(-360deg);
  }

  to{
    transform: translateX(-60px) rotate(-30deg);
  }
`;

export const PokeballBgStyled = styled.div`
  background-image: url(${PokeballImg});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 0;
  height: 200px;
  width: 200px;
  transform: translateX(-60px);
  opacity: 0.1;

  transition-duration: 300ms;

  animation-name: ${pokeballTurnAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.i * 100 + "ms"};
`;

const animation = keyframes`
  from{
    transform: translateX(-50px);
    opacity: 0;
  }

  to{
    transform: translateX(0);
    opacity: 1;
  }
`;

export const CardStyled = styled.div`
  padding-right: 16px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  opacity: 0;

  border: 5px solid ${colors.muted};
  overflow: hidden;

  animation-name: ${animation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.i * 100 + "ms"};

  position: relative;

  transform: scale(${(props) => props.cardSize}%);

  -webkit-transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
`;

export const InformationContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
`;

export const InnerCardContainerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 1;
`;
