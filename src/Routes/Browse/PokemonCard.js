import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SpriteStyled } from "../../Components/Sprite.styles";
import TypeGroup from "../../Components/TypeGroup";
import { getPokeapiByUrl } from "../../Configurations/Pokeapi";
import { PokemonNo, H1Styled } from "../../Constants/Typography.styles";
import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import { capitalizeFront, padNumber } from "../../Helpers/Strings";

import {
  CardCss,
  InnerCardCss,
  LeftCard,
  PokeballBgStyled,
  OwnedText,
  PokeballOwnedSprite,
  OwnedContainer,
} from "./PokemonCard.styles";

const PokemonCard = ({ data, i }) => {
  const history = useHistory();
  const [details, setDetails] = useState({});
  const { countOwned } = useMyPokemonsContext();

  const getData = async () => {
    try {
      const res = await getPokeapiByUrl(data.url);
      setDetails(res);
    } catch {
      console.error("Error fetching data from PokeApi");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CardCss i={i} onClick={() => history.push(`/p/${details?.id}`)}>
      <LeftCard>
        <PokeballBgStyled i={i} />
        <SpriteStyled sprite={details?.sprites?.front_default} size="80px" />
        <InnerCardCss>
          <OwnedContainer>
            <PokeballOwnedSprite />
            <OwnedText>{countOwned(details?.id)}</OwnedText>
          </OwnedContainer>
          <H1Styled>{capitalizeFront(details?.species?.name || "")}</H1Styled>
          <TypeGroup types={details?.types} />
        </InnerCardCss>
      </LeftCard>
      <PokemonNo>{padNumber(details?.id)}</PokemonNo>
    </CardCss>
  );
};

export default PokemonCard;
