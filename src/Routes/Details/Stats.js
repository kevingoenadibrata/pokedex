import React from "react";
import { H1Styled } from "../../Constants/Typography.styles";
import { StatsGroupContainer, StatsGroupTitle } from "./Stats.styles";
import StatsBar from "./StatsBar";

const Stats = ({ stats }) => {
  return (
    <StatsGroupContainer>
      <H1Styled>Base Stats</H1Styled>
      {stats?.map((item) => (
        <StatsBar title={item.stat.name} val={item.base_stat} />
      ))}
    </StatsGroupContainer>
  );
};

export default Stats;
