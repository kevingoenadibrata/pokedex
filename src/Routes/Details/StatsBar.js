import React from "react";
import { statsMapper } from "../../Constants/Mapper";
import { PStyled } from "../../Constants/Typography.styles";
import { StatsContainer, StatsTitle, StatsValue } from "./StatsBar.styles";

const StatsBar = ({ val, title }) => {
  return (
    <>
      <PStyled>{statsMapper[title]}</PStyled>
      <StatsContainer>
        <StatsValue val={val} />
      </StatsContainer>
    </>
  );
};

export default StatsBar;
