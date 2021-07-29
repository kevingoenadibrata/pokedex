import styled from "styled-components";
import { colors } from "../../Constants/Colors";

export const StatsContainer = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${colors.gray100};
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const StatsValue = styled.div`
  height: 3px;
  width: ${(props) => (props.val * 100) / 255}%;
  border-radius: 0 10px 10px 0;
  background-color: ${colors.blue300};
`;

export const StatsTitle = styled.p``;
