import React from "react";
import { snakeToSpaced } from "../../Helpers/Strings";
import { MoveContainer, MoveText } from "./Move.styles";
const Move = ({ move, level, method }) => {
  return (
    <MoveContainer>
      <MoveText>{snakeToSpaced(move)}</MoveText>
      <MoveText>{level}</MoveText>
    </MoveContainer>
  );
};

export default Move;
