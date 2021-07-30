import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SpriteStyled } from "../../Components/Sprite.styles";
import TypeGroup from "../../Components/TypeGroup";
import { getPokeapiByUrl } from "../../Configurations/Pokeapi";
import { PokemonNo, H1Styled } from "../../Constants/Typography.styles";
import { capitalizeFront, padNumber } from "../../Helpers/Strings";
import Owned from "./Owned";
import {
  CardStyled,
  InformationContainerStyled,
  InnerCardContainerStyled,
  PokeballBgStyled,
} from "./PokemonCard.styles";

const PokemonCard = ({ data, i }) => {
  const history = useHistory();
  const [details, setDetails] = useState({});

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
    <CardStyled i={i} onClick={() => history.push(`/p/${details?.id}`)}>
      <InnerCardContainerStyled>
        <PokeballBgStyled i={i} />
        <SpriteStyled sprite={details?.sprites?.front_default} size="80px" />
        <InformationContainerStyled>
          <Owned id={details?.id} />
          <H1Styled>{capitalizeFront(details?.species?.name)}</H1Styled>
          <TypeGroup types={details?.types} />
        </InformationContainerStyled>
      </InnerCardContainerStyled>
      <PokemonNo>{padNumber(details?.id)}</PokemonNo>
    </CardStyled>
  );
};

export default PokemonCard;
