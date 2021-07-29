import { set, get } from "js-cookie";
import React, {
  useContext,
  createContext,
  useCallback,
  useState,
  useEffect,
} from "react";

const MyPokemonsContext = createContext();
const useMyPokemonsContext = () => useContext(MyPokemonsContext);

const MyPokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCookie = useCallback(async () => {
    setLoading(true);
    try {
      const cookieData = JSON.parse(get("mypokemons"));
      if (!cookieData || !cookieData?.pokemons) {
        setPokemons([]);
        set("mypokemons", JSON.stringify({ pokemons: [] }));
      } else {
        setPokemons(cookieData.pokemons);
      }
    } catch {
      setPokemons([]);
      set("mypokemons", JSON.stringify({ pokemons: [] }));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCookie();
  }, [fetchCookie]);

  const addPokemon = (pokemonNickname, pokemonNo) => {
    const temp = [...pokemons];
    let tempId = -1;

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id > tempId) {
        tempId = temp[i].id;
      }
    }

    temp.push({ id: tempId + 1, nickname: pokemonNickname, pokemonNo });
    setPokemons(temp);
    set("mypokemons", JSON.stringify({ pokemons: temp }));
  };

  const removePokemon = (id) => {
    let temp = [];
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].id !== id) {
        temp.push(pokemons[i]);
      }
    }
    setPokemons(temp);
    set("mypokemons", JSON.stringify({ pokemons: temp }));
  };

  const countOwned = (id) => {
    let count = 0;
    for (let i = 0; i < pokemons.length; i++) {
      if (parseInt(pokemons[i].pokemonNo) === id) {
        count++;
      }
    }
    return count;
  };

  return (
    <MyPokemonsContext.Provider
      value={{
        addPokemon,
        removePokemon,
        loading,
        pokemons,
        countOwned,
      }}
    >
      {children}
    </MyPokemonsContext.Provider>
  );
};

export { MyPokemonsProvider, useMyPokemonsContext };
