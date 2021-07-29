import React from "react";
import { CatchButtonElement, CatchButtonContainer } from "./CatchButton.styles";

const CatchButton = ({ setAnimationState, isDisabled }) => {
  const handleClick = () => {
    setAnimationState("catch");
  };
  return (
    <CatchButtonContainer>
      <CatchButtonElement
        isDisabled={isDisabled}
        onClick={isDisabled ? null : handleClick}
      >
        {isDisabled ? "Catching..." : "Throw a Pokeball"}
      </CatchButtonElement>
    </CatchButtonContainer>
  );
};

export default CatchButton;
