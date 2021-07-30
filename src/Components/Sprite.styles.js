import styled from "styled-components";

export const SpriteStyled = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: url(${(props) => props.sprite});
  background-size: cover;
  background-position: center;
  z-index: 1;
  overflow: hidden;
  image-rendering: pixelated;
`;
