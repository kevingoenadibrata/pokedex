import { statsMapper } from "../../Constants/Mapper";
import { PStyled } from "../../Constants/Typography.styles";
import { StatsContainerStyled, StatsValueStyled } from "./StatsBar.styles";

const StatsBar = ({ val, title }) => {
  return (
    <>
      <PStyled>{statsMapper[title]}</PStyled>
      <StatsContainerStyled>
        <StatsValueStyled val={val} />
      </StatsContainerStyled>
    </>
  );
};

export default StatsBar;
