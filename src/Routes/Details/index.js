import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toaster } from "evergreen-ui";
import CatchButton from "./CatchButton";
import Loader from "../../Components/Loader";
import { PokemonNo, TitleCss } from "../../Constants/Typography.styles";
import {
  DetailsContainerCss,
  InnerTitleContainerCss,
  TitleContainerCss,
  PokeballBg,
  PokeballOverlayBg,
  SpriteContainer,
  PokemonNameContainer,
  PokemonName,
  Species,
  PokemonNoDetails,
} from "./index.styles";
import { Type, TypeContainer } from "../../Components/PokemonCard.styles";
import Stats from "./Stats";
import { capitalizeFront, padNumber } from "../../Helpers/Strings";
import SpriteAnimated from "./SpriteAnimated";
import NicknameDialog from "./NicknameDialog";
import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import {
  getPokeapiByUrl,
  getPokemonByNumber,
} from "../../Configurations/Pokeapi";
import MovesetGroup from "./MovesetGroup";

const Details = () => {
  const { pokemonNo } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState();
  const [species, setSpecies] = useState();
  const [animationState, setAnimationState] = useState("entry");
  const [isDialogShown, setIsDialogShown] = useState(false);
  const { addPokemon } = useMyPokemonsContext();

  const getData = async () => {
    setIsLoading(true);
    try {
      const detailsRes = await getPokemonByNumber(pokemonNo);
      const speciesRes = await getPokeapiByUrl(detailsRes?.species?.url);

      setDetails(detailsRes);
      console.log(detailsRes);

      let speciesTemp = "";
      speciesRes.genera.forEach((item) => {
        if (item.language.name === "en") {
          speciesTemp = item.genus;
        }
      });

      setSpecies(speciesTemp);
    } catch {
      console.error("Error fetching data from PokeAPI");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [pokemonNo]);

  const calculateCatchResults = () => {
    if (Math.random() >= 0.5) {
      setAnimationState("success");
    } else {
      setAnimationState("fail");
    }
  };

  const resetState = () => {
    setAnimationState("entry");
  };

  const promptNickname = () => {
    setIsDialogShown(true);
  };

  const handleCloseComplete = () => {
    setIsDialogShown(false);
    resetState();
  };

  const handleAddPokemon = (nickname) => {
    addPokemon(nickname, pokemonNo);
    toaster.success(`${nickname} added to bag`);
    setIsDialogShown(false);
    resetState();
  };

  if (isLoading) {
    return (
      <DetailsContainerCss>
        <Loader />
      </DetailsContainerCss>
    );
  }

  return (
    <DetailsContainerCss
      type={details?.types[0].type.name}
      secondaryType={details?.types[1]?.type?.name}
    >
      <NicknameDialog
        pokemonName={capitalizeFront(details?.species?.name)}
        isShown={isDialogShown}
        onCloseComplete={handleCloseComplete}
        onConfirm={handleAddPokemon}
      />
      <SpriteContainer>
        <PokeballBg />
        <PokeballOverlayBg />
        <SpriteAnimated
          sprite={details?.sprites?.front_default}
          animationState={animationState}
          calculateCatchResults={calculateCatchResults}
          promptNickname={promptNickname}
          resetState={resetState}
        />
      </SpriteContainer>

      <TitleContainerCss>
        <InnerTitleContainerCss>
          <PokemonNameContainer>
            <PokemonNoDetails>{padNumber(details?.id)}</PokemonNoDetails>
            <PokemonName>{capitalizeFront(details?.species?.name)}</PokemonName>
          </PokemonNameContainer>

          <Species>{species}</Species>

          <TypeContainer>
            {details?.types.map((item) => (
              <Type type={item.type.name}>{item.type.name.toUpperCase()}</Type>
            ))}
          </TypeContainer>

          <CatchButton
            setAnimationState={setAnimationState}
            isDisabled={animationState !== "entry"}
          />
        </InnerTitleContainerCss>
        <Stats stats={details?.stats} />
        <MovesetGroup moveset={details?.moves} />
      </TitleContainerCss>
    </DetailsContainerCss>
  );
};

export default Details;
