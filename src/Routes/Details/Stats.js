import React from "react";
import { StatsGroupContainer, StatsGroupTitle } from "./Stats.styles";
import StatsBar from "./StatsBar";

const Stats = ({ stats }) => {
  return (
    <StatsGroupContainer>
      <StatsGroupTitle>Base Stats</StatsGroupTitle>
      {stats?.map((item) => (
        <StatsBar title={item.stat.name} val={item.base_stat} />
      ))}
    </StatsGroupContainer>
  );
};

export default Stats;
