import styled from "styled-components";
import { colors } from "./Colors";

export const SubtitleCss = styled.p`
  font-size: 0.8em;
  opacity: 0.5;
`;

export const TitleCss = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

export const PokemonNo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${colors.muted};
  font-family: mono45-headline, monospace;
  position: absolute;
  margin-right: 16px;
  right: 0;
`;
