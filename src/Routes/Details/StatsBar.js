import React from "react";
import { StatsContainer, StatsValue } from "./StatsBar.styles";

const StatsBar = ({ val, title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <StatsContainer>
        <StatsValue val={val} />
      </StatsContainer>
    </div>
  );
};

export default StatsBar;
