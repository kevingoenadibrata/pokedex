import styled, { keyframes } from "styled-components";
import { colors } from "../../Constants/Colors";

export const StatsContainer = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${colors.gray100};
  overflow: hidden;
  border-radius: 10px;
`;

export const StatsValue = styled.div`
  height: 10px;
  width: ${(props) => (props.val * 100) / 255}%;
  border-radius: 0 10px 10px 0;
  background-color: ${colors.bluePrimary};
`;
