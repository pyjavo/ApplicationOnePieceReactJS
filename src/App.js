import React, { useState } from "react";
import { Route, Switch, Link, Redirect } from "wouter";
import CharacterCard from "./components/ChartMugiwara/ChartersCard";
import CharacterFetcher from "./components/ChartMugiwara/CharacterFetcher";
import CharacterFetch from "./components/ChartHeart/CharacterFetch";
import Home from "./pages/Home"; // Importa el componente Home
import logo from "./Imagenes/Logo.png";
import logoHeart from "./Imagenes/LogoHeart.png";
import "./App.css";
import "./components/ChartHeart/heart.css";
const App = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <div>
      <Switch>
        {/* Página principal que solo muestra los botones de navegación */}
        <Route path="/">
          <Home />
        </Route>

        {/* Ruta para ver la tripulación Mugiwara */}
        <Route path="/mugi">
          <div className="Mugiwaras">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <h1>
              <strong>Tripulación Mugiwara</strong>
            </h1>
            <CharacterFetcher setCharacters={setCharacters} />
            <ul>
              {characters.map((char) => (
                <li key={char.id}>
                  <CharacterCard character={char} />
                </li>
              ))}
            </ul>
          </div>
        </Route>

        {/* Ruta para ver la tripulación Piratas Heart */}
        <Route  path="/heart">
          <div className="Heart ">
            <Link to="/">
              <img className="logo" src={logoHeart} alt="logo" />
            </Link>
            <h1 className="titule">
              <strong >Piratas Heart</strong>
            </h1>
            <CharacterFetch setCharacters={setCharacters} />
            <ul>
              {characters.map((char) => (
                <li key={char.id}>
                  <CharacterCard character={char} />
                </li>
              ))}
            </ul>
          </div>
        </Route>

        {/* Redirección a Home si no existe la ruta */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
