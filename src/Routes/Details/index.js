import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toaster } from "evergreen-ui";
import CatchButton from "./CatchButton";
import Loader from "../../Components/Loader";
import {
  DetailsContainerStyled,
  InformationContainerStyled,
  CardStyled,
  DarkPokeballBgStyled,
  PokeballOverlayBgStyled,
  SpriteContainerStyled,
  PokemonNameContainerStyled,
  SpeciesStyled,
  PokemonNameStyled,
  PokemonNoDetailsStyled,
} from "./index.styles";
import StatsGroup from "./StatsGroup";
import { capitalizeFront, padNumber } from "../../Helpers/Strings";
import SpriteAnimated from "./SpriteAnimated";
import NicknameDialog from "./NicknameDialog";
import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import {
  getPokeapiByUrl,
  getPokemonByNumber,
} from "../../Configurations/Pokeapi";
import MovesetGroup from "./MovesetGroup";
import TypeGroup from "../../Components/TypeGroup";
import Error404 from "../Error404";

const Details = () => {
  const { pokemonNo } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState();
  const [species, setSpecies] = useState();
  const [animationState, setAnimationState] = useState("entry");
  const [isDialogShown, setIsDialogShown] = useState(false);
  const { addPokemon } = useMyPokemonsContext();
  const [isError, setIsError] = useState(false);

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
      setIsError(true);
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
      <DetailsContainerStyled>
        <Loader />
      </DetailsContainerStyled>
    );
  }

  if (isError) {
    return <Error404 />;
  }

  return (
    <DetailsContainerStyled
      type={details?.types[0].type.name}
      secondaryType={details?.types[1]?.type?.name}
    >
      <NicknameDialog
        pokemonName={capitalizeFront(details?.species?.name)}
        isShown={isDialogShown}
        onCloseComplete={handleCloseComplete}
        onConfirm={handleAddPokemon}
      />
      <SpriteContainerStyled>
        <DarkPokeballBgStyled />
        <PokeballOverlayBgStyled />
        <SpriteAnimated
          sprite={details?.sprites?.front_default}
          animationState={animationState}
          calculateCatchResults={calculateCatchResults}
          promptNickname={promptNickname}
          resetState={resetState}
        />
      </SpriteContainerStyled>

      <CardStyled>
        <InformationContainerStyled>
          <PokemonNameContainerStyled>
            <PokemonNoDetailsStyled>
              {padNumber(details?.id)}
            </PokemonNoDetailsStyled>
            <PokemonNameStyled>
              {capitalizeFront(details?.species?.name)}
            </PokemonNameStyled>
          </PokemonNameContainerStyled>
          <SpeciesStyled>{species}</SpeciesStyled>
          <TypeGroup types={details?.types} />
          <CatchButton
            setAnimationState={setAnimationState}
            isDisabled={animationState !== "entry"}
          />
        </InformationContainerStyled>
        <StatsGroup stats={details?.stats} />
        <MovesetGroup moveset={details?.moves} />
      </CardStyled>
    </DetailsContainerStyled>
  );
};

export default Details;
