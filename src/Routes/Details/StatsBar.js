import React from "react";
import { statsMapper } from "../../Constants/Mapper";
import { StatsContainer, StatsTitle, StatsValue } from "./StatsBar.styles";

const StatsBar = ({ val, title }) => {
  return (
    <div>
      <StatsTitle>{statsMapper[title]}</StatsTitle>
      <StatsContainer>
        <StatsValue val={val} />
      </StatsContainer>
    </div>
  );
};

export default StatsBar;
