import styled, { keyframes } from "styled-components";
import { colors, typeColors } from "../../Constants/Colors";
import PokeballImg from "../../Assets/pokeball-bg.png";
import PokeballSpriteImg from "../../Assets/pokeball-sprite.png";
import {
  H1Styled,
  PokemonNo,
  PStyled,
} from "../../Constants/Typography.styles";

export const DetailsContainerCss = styled.div`
  padding: 64px 8px 0 8px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: ${(props) =>
    `-webkit-linear-gradient( -75deg, ${
      props.secondaryType
        ? typeColors[props.secondaryType]
        : typeColors[props.type]
    } 0%, ${
      props.secondaryType
        ? typeColors[props.secondaryType]
        : typeColors[props.type]
    } 60%, ${typeColors[props.type]} 60%, ${typeColors[props.type]} 60%);`}
  
    background-image: ${(props) =>
      `linear-gradient( -75deg, ${
        props.secondaryType
          ? typeColors[props.secondaryType]
          : typeColors[props.type]
      } 0%, ${
        props.secondaryType
          ? typeColors[props.secondaryType]
          : typeColors[props.type]
      } 60%, ${typeColors[props.type]} 60%, ${typeColors[props.type]} 60%);`}
  
`;

const cardSwingAnimation = keyframes`
      0%{
        transform: translateY(50px);
        opacity: 0;
      }

      100%{
        transform: translateY(0);
        opacity: 1;
      }

`;

export const TitleContainerCss = styled.div`
  margin-top: -32px;
  padding: 24px;
  background-color: white;
  width: 100%;
  min-height: 70vh;
  border-radius: 16px 16px 0 0;
  border: 5px solid ${colors.muted};
  z-index: 3;

  animation-name: ${cardSwingAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const InnerTitleContainerCss = styled.div`
  margin-bottom: 8px;
`;

export const ButtonIconCss = styled.div`
  margin-right: 8px;
`;

const shakeAnimation = keyframes`
  10%,
  90% {
    transform: translate3d(0,-1px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, 2px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(0, -4px, 0);
  }

  40%,
  60% {
    transform: translate3d(0, 4px, 0);
  }
`;

export const SpriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sprite = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-width: 400px;
  max-height: 400px;
  background: url(${(props) => props.sprite});
  background-size: cover;
  background-position: center;
  image-rendering: pixelated;

  animation-name: ${shakeAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  z-index: 2;
`;

export const PokeballSprite = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background-image: url(${PokeballSpriteImg});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const PokeballBg = styled.div`
  background-image: url(${PokeballImg});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 0;
  height: 250px;
  width: 250px;
  opacity: 0.4;

  transition-duration: 300ms;
`;

export const PokeballOverlayBg = styled.div`
  background-color: #000000;
  position: absolute;
  z-index: 0;
  height: 250px;
  width: 250px;
  opacity: 0.3;
  filter: blur(20px);
  border-radius: 50%;
`;

export const PokemonNameContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const PokemonNameStyled = styled(H1Styled)`
  margin-left: 8px;
  margin-bottom: 4px;
`;

export const Species = styled(PStyled)`
  margin-bottom: 4px;
  margin-top: -4px;
`;

export const PokemonNoDetailsStyled = styled(PokemonNo)`
  position: static;
  margin-right: 0;
`;
