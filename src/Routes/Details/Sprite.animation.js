import styled, { keyframes } from "styled-components";
import { PokeballSprite, Sprite } from "./index.styles";

const shrinkAnimation = keyframes`
  0%{
    transform: scale(1) rotate(0deg);
    filter: brightness(1);
  }

  50%{
    filter: brightness(10);
  }

  50%{
    transform: scale(0.5) rotate(0deg);
  }

  60%{
    transform: scale(0.5) rotate(0deg);
  }

  100%{
    transform: scale(0.001) rotate(180deg);
    filter: brightness(100);
  }
`;

export const SpriteShrinking = styled(Sprite)`
  animation-name: ${shrinkAnimation};
`;

const growAnimation = keyframes`
  0%{
    transform: scale(0);
    filter: brightness(100);
  }

  100%{
    transform: scale(1);
    filter: brightness(1);
  }
`;

export const SpriteGrowing = styled(Sprite)`
  transform: scale(0);
  animation-name: ${growAnimation};
  animation-delay: 1s;
  animation-timing-function: ease-out;
`;

export const SpriteHidden = styled(Sprite)`
  opacity: 0;
`;

const shakingAnimation = keyframes`
  18%   { transform: rotate(0deg)   translateX(0px);  }
  20%   { transform: rotate(-20deg) translateX(-4px); }
  27.5% { transform: rotate(10deg)  translateX(4px);  }
  30%   { transform: rotate(0deg)   translateX(0px);  }

  48%   { transform: rotate(0deg)   translateX(0px);  }
  50%   { transform: rotate(20deg)  translateX(4px);  }
  57.5% { transform: rotate(-10deg) translateX(-4px); }
  60%   { transform: rotate(0deg)   translateX(0px);  }

  78%   { transform: rotate(0deg)   translateX(0px);  }
  80%   { transform: rotate(-10deg) translateX(-4px); }
  87.5% { transform: rotate(20deg)  translateX(4px);  }
  90%   { transform: rotate(0deg)   translateX(0px);  }
`;

export const PokeballShaking = styled(PokeballSprite)`
  animation-name: ${shakingAnimation};
  animation-duration: 3s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
`;

const captureSuccessAnimation = keyframes`
  0%{
    filter: brightness(1);
    transform: scale(1);
  }

  75%{
    transform: scale(0.8);
  }

  100%{
    filter: brightness(0.5);
    transform: scale(1);
  }

`;

export const PokeballSuccess = styled(PokeballSprite)`
  animation-name: ${captureSuccessAnimation};
  animation-duration: 100ms;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

export const PokeballDisappear = styled(PokeballSprite)`
  animation-name: ${shrinkAnimation};
  animation-duration: 500ms;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;
