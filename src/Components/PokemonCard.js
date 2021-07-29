import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPokeapiByUrl } from "../Configurations/Pokeapi";
import { PokemonNo, TitleCss } from "../Constants/Typography.styles";
import { capitalizeFront, padNumber } from "../Helpers/Strings";

import {
  CardCss,
  PosterCss,
  InnerCardCss,
  LeftCard,
  TypeContainer,
  Type,
  PokeballBg,
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
    <CardCss i={i} onClick={() => history.push(`/p/${details?.id}`)}>
      <LeftCard>
        <PokeballBg i={i} />
        <PosterCss poster={details?.sprites?.front_default}></PosterCss>
        <InnerCardCss>
          <TitleCss>{capitalizeFront(details?.species?.name || "")}</TitleCss>
          <TypeContainer>
            {details?.types?.map((item) => (
              <Type type={item.type.name}>{item.type.name.toUpperCase()}</Type>
            ))}
          </TypeContainer>
        </InnerCardCss>
      </LeftCard>
      <PokemonNo>{padNumber(details?.id)}</PokemonNo>
    </CardCss>
  );
};

export default PokemonCard;
