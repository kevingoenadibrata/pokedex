import styled from "styled-components";
import { colors } from "../../Constants/Colors";

export const MoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${colors.muted};
`;

export const MoveText = styled.p`
  margin-right: 8px;
`;
