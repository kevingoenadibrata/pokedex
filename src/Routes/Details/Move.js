import { PStyled } from "../../Constants/Typography.styles";
import { snakeToSpaced } from "../../Helpers/Strings";
import { MoveContainerStyled } from "./Move.styles";
const Move = ({ move, level }) => {
  return (
    <MoveContainerStyled>
      <PStyled>{snakeToSpaced(move)}</PStyled>
      <PStyled>{level}</PStyled>
    </MoveContainerStyled>
  );
};

export default Move;
