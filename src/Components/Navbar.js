import React from "react";
import Logo from "../Assets/logo.png";
import { LogoCss, NavbarContainerCss, PokeballIcon } from "./Navbar.styles";
import { useHistory } from "react-router-dom";
import PokeballIconImg from "../Assets/pokeball-icon.png";

const Navbar = () => {
  const history = useHistory();
  return (
    <NavbarContainerCss>
      <LogoCss src={Logo} alt="logo" onClick={() => history.push("/")} />
      <PokeballIcon
        src={PokeballIconImg}
        alt="pokeball"
        onClick={() => history.push("/my-pokemons")}
      />
    </NavbarContainerCss>
  );
};

export default Navbar;
