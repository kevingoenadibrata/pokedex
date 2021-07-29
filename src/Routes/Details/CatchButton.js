import React from "react";
import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import { ButtonCss } from "./CatchButton.styles";

const CatchButton = ({ setAnimationState }) => {
  const { addPokemon } = useMyPokemonsContext();

  const handleClickAddToMyMoo = () => {
    setAnimationState("catch");
  };

  return (
    <div>
      <ButtonCss onClick={handleClickAddToMyMoo}>Add to MyMoo</ButtonCss>
    </div>
  );
};

export default CatchButton;
