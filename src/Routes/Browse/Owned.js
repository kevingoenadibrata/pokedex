import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import { OwnedContainer, OwnedText, PokeballOwnedSprite } from "./Owned.styles";

const Owned = ({ id }) => {
  const { countOwned } = useMyPokemonsContext();
  return (
    <OwnedContainer>
      <PokeballOwnedSprite />
      <OwnedText>{countOwned(id)}</OwnedText>
    </OwnedContainer>
  );
};

export default Owned;
