const Pokedex = require("pokeapi-js-wrapper");

export const ENTRIES_PER_PAGE = 20;

export const PokedexAdapter = new Pokedex.Pokedex({
  cache: true,
  cacheImages: true,
});

export const getPokeapiByUrl = async (url) => {
  return PokedexAdapter.resource(url);
};

export const getPokemonsList = async (page) => {
  return PokedexAdapter.getPokemonsList({
    offset: (page - 1) * ENTRIES_PER_PAGE,
    limit: ENTRIES_PER_PAGE,
  });
};

export const getPokemonByNumber = async (pokemonNo) => {
  return PokedexAdapter.getPokemonByName(pokemonNo);
};
