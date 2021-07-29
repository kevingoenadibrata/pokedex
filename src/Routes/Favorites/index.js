import React, { useEffect, useState } from "react";
import ByKevin from "../../Components/ByKevin";
import Loader from "../../Components/Loader";
import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import { PageTitleCss } from "../Browse/index.styles";
import { MyMoosContainerCss, MyPokemonsContainer } from "./index.styles";
import MyPokemonCard from "./MyPokemonCard";

const Favorites = () => {
  const { pokemons } = useMyPokemonsContext();

  return (
    <MyMoosContainerCss>
      <PageTitleCss>My Pokemons</PageTitleCss>
      <MyPokemonsContainer>
        {pokemons.map((item, index) => (
          <MyPokemonCard
            key={item.id}
            id={item.id}
            i={index}
            pokemonNo={item.pokemonNo}
            nickname={item.nickname}
          />
        ))}
      </MyPokemonsContainer>
      <ByKevin />
    </MyMoosContainerCss>
  );
};

export default Favorites;
