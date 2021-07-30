import styled, { keyframes } from "styled-components";
import { colors, typeColors } from "../../Constants/Colors";
import { H1Styled, PStyled } from "../../Constants/Typography.styles";
import { PokeballBgStyled } from "../Browse/PokemonCard.styles";

const pokeballTurnAnimation = keyframes`
  from { transform: translateX(0) rotate(-360deg); }
  to { transform: translateX(0) rotate(-30deg); }
`;

export const MyPokeballBgStyled = styled(PokeballBgStyled)`
  animation-name: ${pokeballTurnAnimation};
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

export const ContainerStyled = styled.div`
  width: 100%;
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  word-wrap: break-word;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  margin-bottom: 8px;
`;

export const Type = styled(PStyled)`
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

export const NicknameStyled = styled(H1Styled)`
  line-height: 16px;
  margin-bottom: 2px;
`;

export const PokemonNameStyled = styled(PStyled)`
  margin-bottom: 4px;
`;

export const SpriteContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -16px;
`;

export const DetailsButtonStyled = styled.button`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 4px;
  border-radius: 4px;
  border: 2px solid ${colors.muted};
  cursor: pointer;

  transition-duration: 200ms;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const ReleaseButtonStyled = styled(DetailsButtonStyled)`
  margin-top: 2px;
  margin-bottom: 0px;
  background-color: ${colors.red};
  color: white;
`;
