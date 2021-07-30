import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BodyCss, MainContainerCss } from "./App.styles";
import Browse from "./Routes/Browse";
import MyBag from "./Routes/MyBag";
import Details from "./Routes/Details";
import { MyPokemonsProvider } from "./Context/MyPokemonsContext";

function App() {
  return (
    <Router>
      <MyPokemonsProvider>
        <BodyCss>
          <MainContainerCss>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Browse} />
              <Route exact path="/p/:pokemonNo" component={Details} />
              <Route path="/my-pokemons" component={MyBag} />
            </Switch>
          </MainContainerCss>
        </BodyCss>
      </MyPokemonsProvider>
    </Router>
  );
}

export default App;
