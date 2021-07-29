import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { capitalizeFront } from "../../Helpers/Strings";
import {
  CardCss,
  Sprite,
  InnerCardCss,
  TypeContainer,
  Type,
  PokeballBg,
  Nickname,
  PokemonName,
  SpriteContainer,
  ReleaseButton,
  DetailsButton,
  Container,
} from "./MyPokemonCard.styles";

import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import ReleaseConfirmationDialog from "./ReleaseConfirmationDialog";

const MyPokemonCard = ({ pokemonNo, nickname, i, id }) => {
  const history = useHistory();
  const [details, setDetails] = useState({});
  const { removePokemon } = useMyPokemonsContext();
  const [isReleaseDialogShown, setIsReleaseDialogShown] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNo}`
      );
      setDetails(res.data);
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
    <CardCss i={i}>
      <ReleaseConfirmationDialog
        isShown={isReleaseDialogShown}
        onConfirm={handleRelease}
        onCloseComplete={handleCloseComplete}
        pokemonNickname={nickname}
      />
      <Container>
        <SpriteContainer>
          <PokeballBg i={i} />
          <Sprite poster={details?.sprites?.front_default}></Sprite>
        </SpriteContainer>

        <InnerCardCss>
          <Nickname>{nickname}</Nickname>
          <PokemonName>
            {capitalizeFront(details?.species?.name || "")}
          </PokemonName>
          <TypeContainer>
            {details?.types?.map((item) => (
              <Type type={item.type.name}>{item.type.name.toUpperCase()}</Type>
            ))}
          </TypeContainer>
        </InnerCardCss>
      </Container>
      <Container>
        <DetailsButton onClick={() => history.push(`/p/${details?.id}`)}>
          Details
        </DetailsButton>
        <ReleaseButton onClick={() => setIsReleaseDialogShown(true)}>
          Release
        </ReleaseButton>
      </Container>
    </CardCss>
  );
};

export default MyPokemonCard;
