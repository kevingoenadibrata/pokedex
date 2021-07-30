import styled from "styled-components";
import { colors, typeColors } from "../Constants/Colors";
import { PStyled } from "../Constants/Typography.styles";

export const TypeGroupContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const Type = styled(PStyled)`
  margin-right: 4px;
  padding: 4px 16px;
  background-color: ${(props) => typeColors[props.type] || colors.gray300};
  color: ${(props) =>
    props.type === "unknown" ? colors.gray300 : colors.white};
  border-radius: 50px;
  font-size: ${(props) => (props.size === "sm" ? "0.4rem" : "0.6rem")};
  font-weight: 600;
  z-index: 1;
  opacity: 1;
`;
