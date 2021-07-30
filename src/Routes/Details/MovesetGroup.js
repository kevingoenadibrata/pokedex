import Move from "./Move";
import { MovesetGroupContainerStyled } from "./MovesetGroup.styles";
import { H1Styled } from "../../Constants/Typography.styles";

const MovesetGroup = ({ moveset }) => {
  const sortByLevel = (a, b) => {
    return (
      a?.version_group_details[0]?.level_learned_at -
      b?.version_group_details[0]?.level_learned_at
    );
  };

  const filterByLevel = (item) => {
    return (
      item?.version_group_details[0]?.move_learn_method?.name === "level-up"
    );
  };

  const levelGroup = moveset
    .filter((item) => filterByLevel(item))
    .sort(sortByLevel);

  return (
    <MovesetGroupContainerStyled>
      <H1Styled>Moveset Learned by Level</H1Styled>
      {levelGroup.map((item) => (
        <Move
          move={item.move.name}
          level={item.version_group_details[0].level_learned_at}
        />
      ))}
    </MovesetGroupContainerStyled>
  );
};

export default MovesetGroup;
