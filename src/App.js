import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BodyStyled, MainContainerStyled } from "./App.styles";
import Browse from "./Routes/Browse";
import MyBag from "./Routes/MyBag";
import Details from "./Routes/Details";
import { MyPokemonsProvider } from "./Context/MyPokemonsContext";
import Error404 from "./Routes/Error404";

function App() {
  return (
    <Router>
      <MyPokemonsProvider>
        <BodyStyled>
          <MainContainerStyled>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Browse} />
              <Route exact path="/p/:pokemonNo" component={Details} />
              <Route path="/my-pokemons" component={MyBag} />
              <Route path="/*" component={Error404} />
            </Switch>
          </MainContainerStyled>
        </BodyStyled>
      </MyPokemonsProvider>
    </Router>
  );
}

export default App;
