import styled from "styled-components";
import { PokeballSprite } from "../Details/index.styles";

export const OwnedContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2px;
`;

export const OwnedText = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  margin-top: 1px;
`;

export const PokeballOwnedSprite = styled(PokeballSprite)`
  width: 10px;
  height: 10px;
  display: block;
  position: static;
  margin-right: 4px;
`;
