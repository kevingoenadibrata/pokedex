import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { capitalizeFront } from "../../Helpers/Strings";
import {
  CardStyled,
  InfoContainerStyled,
  MyPokeballBgStyled,
  NicknameStyled,
  PokemonNameStyled,
  SpriteContainerStyled,
  ReleaseButtonStyled,
  DetailsButtonStyled,
  ContainerStyled,
} from "./MyPokemonCard.styles";

import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import ReleaseConfirmationDialog from "./ReleaseConfirmationDialog";
import { getPokemonByNumber } from "../../Configurations/Pokeapi";
import TypeGroup from "../../Components/TypeGroup";
import { SpriteStyled } from "../../Components/Sprite.styles";

const MyPokemonCard = ({ pokemonNo, nickname, i, id }) => {
  const history = useHistory();
  const [details, setDetails] = useState({});
  const { removePokemon } = useMyPokemonsContext();
  const [isReleaseDialogShown, setIsReleaseDialogShown] = useState(false);

  const getData = async () => {
    try {
      const res = await getPokemonByNumber(pokemonNo);
      setDetails(res);
    } catch {
      console.error("Error fetching data from PokeApi");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleRelease = () => {
    removePokemon(id);
    setIsReleaseDialogShown(false);
  };

  const handleCloseComplete = () => {
    setIsReleaseDialogShown(false);
  };

  return (
    <CardStyled i={i}>
      <ReleaseConfirmationDialog
        isShown={isReleaseDialogShown}
        onConfirm={handleRelease}
        onCloseComplete={handleCloseComplete}
        pokemonNickname={nickname}
      />

      <ContainerStyled>
        <SpriteContainerStyled>
          <MyPokeballBgStyled i={i} />
          <SpriteStyled sprite={details?.sprites?.front_default} size="120px" />
        </SpriteContainerStyled>

        <InfoContainerStyled>
          <NicknameStyled>{nickname}</NicknameStyled>
          <PokemonNameStyled>
            {capitalizeFront(details?.species?.name || "")}
          </PokemonNameStyled>
          <TypeGroup size="sm" types={details?.types} />
        </InfoContainerStyled>
      </ContainerStyled>

      <ContainerStyled>
        <DetailsButtonStyled onClick={() => history.push(`/p/${details?.id}`)}>
          Details
        </DetailsButtonStyled>
        <ReleaseButtonStyled onClick={() => setIsReleaseDialogShown(true)}>
          Release
        </ReleaseButtonStyled>
      </ContainerStyled>
    </CardStyled>
  );
};

export default MyPokemonCard;
