import {
  CatchButtonElementStyled,
  CatchButtonContainerStyled,
} from "./CatchButton.styles";

const CatchButton = ({ setAnimationState, isDisabled }) => {
  const handleClick = () => {
    setAnimationState("catch");
  };
  return (
    <CatchButtonContainerStyled>
      <CatchButtonElementStyled
        isDisabled={isDisabled}
        onClick={isDisabled ? null : handleClick}
      >
        {isDisabled ? "Catching..." : "Throw a Pokeball"}
      </CatchButtonElementStyled>
    </CatchButtonContainerStyled>
  );
};

export default CatchButton;
