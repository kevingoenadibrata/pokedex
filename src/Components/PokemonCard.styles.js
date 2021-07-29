import styled, { keyframes } from "styled-components";
import { colors, typeColors } from "../Constants/Colors";
import { SubtitleCss } from "../Constants/Typography.styles";
import PokeballImg from "../Assets/pokeball-bg.png";

const pokeballTurnAnimation = keyframes`
  from{
    transform: translateX(-60px) rotate(-360deg);
  }

  to{
    transform: translateX(-60px) rotate(-30deg);
  }
`;

export const PokeballBg = styled.div`
  background-image: url(${PokeballImg});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 0;
  height: 200px;
  width: 200px;
  transform: translateX(-60px) rotate(-360deg);
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

export const CardCss = styled.div`
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
`;

export const InnerCardCss = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
`;

export const PosterCss = styled.div`
  width: 80px;
  height: 80px;
  background: url(${(props) => props.poster});
  background-size: cover;
  background-position: center;
  z-index: 1;
  overflow: hidden;
  image-rendering: pixelated;
`;

export const LeftCard = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 1;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const Type = styled(SubtitleCss)`
  margin-right: 4px;
  padding: 4px 16px;
  background-color: ${(props) => typeColors[props.type]};
  color: white;
  border-radius: 50px;
  font-size: 0.6rem;
  font-weight: 600;
  z-index: 1;
  opacity: 1;
`;
