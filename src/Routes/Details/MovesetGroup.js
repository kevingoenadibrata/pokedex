import React from "react";
import Move from "./Move";
import { MovesetGroupContainer } from "./MovesetGroup.styles";
import { H1Styled } from "../../Constants/Typography.styles";

const MovesetGroup = ({ moveset }) => {
  const levelGroup = moveset
    .filter(
      (item) =>
        item.version_group_details[0].move_learn_method.name === "level-up"
    )
    .sort(
      (a, b) =>
        a.version_group_details[0].level_learned_at -
        b.version_group_details[0].level_learned_at
    );

  return (
    <MovesetGroupContainer>
      <H1Styled>Moveset Learned by Level</H1Styled>
      {levelGroup.map((item) => (
        <Move
          move={item.move.name}
          level={item.version_group_details[0].level_learned_at}
          method={item.version_group_details[0].move_learn_method.name}
        />
      ))}
    </MovesetGroupContainer>
  );
};

export default MovesetGroup;
