import ByKevin from "../../Components/ByKevin";
import { H1Styled } from "../../Constants/Typography.styles";
import { useMyPokemonsContext } from "../../Context/MyPokemonsContext";
import { PageContainerStyled, MyPokemonsContainerStyled } from "./index.styles";
import MyPokemonCard from "./MyPokemonCard";

const MyBag = () => {
  const { pokemons } = useMyPokemonsContext();

  return (
    <PageContainerStyled>
      <H1Styled>My Bag</H1Styled>
      <MyPokemonsContainerStyled>
        {pokemons.map((item, index) => (
          <MyPokemonCard
            key={item.id}
            id={item.id}
            i={index}
            pokemonNo={item.pokemonNo}
            nickname={item.nickname}
          />
        ))}
      </MyPokemonsContainerStyled>
      <ByKevin />
    </PageContainerStyled>
  );
};

export default MyBag;
