import LogoImg from "../Assets/logo.png";
import PokeballIconImg from "../Assets/pokeball-icon.png";
import {
  LogoStyled,
  NavbarContainerStyled,
  PokeballIconStyled,
  MyBagContainerStyled,
  MyBagTextStyled,
} from "./Navbar.styles";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <NavbarContainerStyled>
      <LogoStyled src={LogoImg} alt="logo" onClick={() => history.push("/")} />
      <MyBagContainerStyled onClick={() => history.push("/my-pokemons")}>
        <PokeballIconStyled src={PokeballIconImg} alt="pokeball" />
        <MyBagTextStyled>MY BAG</MyBagTextStyled>
      </MyBagContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
