import styled, { keyframes } from "styled-components";
import { colors, typeColors } from "../../Constants/Colors";
import { SubtitleCss } from "../../Constants/Typography.styles";
import PokeballImg from "../../Assets/pokeball-bg.png";

const pokeballTurnAnimation = keyframes`
  from{
    transform: rotate(-360deg);
  }

  to{
    transform: rotate(-30deg);
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
  padding: 16px 8px;
  width: 45%;
  max-width: 150px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  margin-bottom: 8px;
  margin-right: 8px;
  opacity: 0;

  border: 5px solid ${colors.muted};
  overflow: hidden;
  position: relative;

  animation-name: ${animation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.i * 100 + "ms"};
`;

export const Container = styled.div`
  width: 100%;
`;

export const InnerCardCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  word-wrap: break-word;
`;

export const Sprite = styled.div`
  width: 120px;
  height: 120px;
  background: url(${(props) => props.poster});
  background-size: cover;
  background-position: center;
  z-index: 1;
  overflow: hidden;
  image-rendering: pixelated;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  margin-bottom: 8px;
`;

export const Type = styled(SubtitleCss)`
  margin-right: 4px;
  padding: 4px 16px;
  background-color: ${(props) => typeColors[props.type]};
  color: white;
  border-radius: 50px;
  font-size: 0.4rem;
  font-weight: 600;
  z-index: 1;
  opacity: 1;
`;

export const Nickname = styled.h3`
  font-weight: 600;
  line-height: 16px;
`;

export const PokemonName = styled.h4`
  font-weight: 500;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export const SpriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -16px;
`;

export const DetailsButton = styled.button`
  width: 100%;
  margin-bottom: 4px;
  border-radius: 4px;
  border: 2px solid ${colors.muted};
  cursor: pointer;

  transition-duration: 200ms;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const ReleaseButton = styled(DetailsButton)`
  margin-bottom: 0px;
  background-color: ${colors.red};
  color: white;
`;
