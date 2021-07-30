import React from "react";
import { PStyled } from "../../Constants/Typography.styles";
import { snakeToSpaced } from "../../Helpers/Strings";
import { MoveContainer, MoveText } from "./Move.styles";
const Move = ({ move, level, method }) => {
  return (
    <MoveContainer>
      <PStyled>{snakeToSpaced(move)}</PStyled>
      <PStyled>{level}</PStyled>
    </MoveContainer>
  );
};

export default Move;
