import { H1Styled } from "../../Constants/Typography.styles";
import { StatsGroupContainerStyled } from "./StatsGroup.styles";
import StatsBar from "./StatsBar";

const StatsGroup = ({ stats }) => {
  return (
    <StatsGroupContainerStyled>
      <H1Styled>Base Stats</H1Styled>
      {stats?.map((item) => (
        <StatsBar title={item.stat.name} val={item.base_stat} />
      ))}
    </StatsGroupContainerStyled>
  );
};

export default StatsGroup;
