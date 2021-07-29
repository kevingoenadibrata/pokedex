const Pokedex = require("pokeapi-js-wrapper");

export const PokedexAdapter = new Pokedex.Pokedex({
  cache: true,
  cacheImages: true,
});

export const getPokeapiByUrl = async (url) => {
  return PokedexAdapter.resource(url);
};

export const getPokemonsList = async (page) => {
  return PokedexAdapter.getPokemonsList({ offset: (page - 1) * 20, limit: 20 });
};

export const getPokemonByNumber = async (pokemonNo) => {
  return PokedexAdapter.getPokemonByName(pokemonNo);
};
