import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const parcourir = (tableau) => {
    return tableau.map((pokemon, index) => (
      <button
        type="button"
        key={pokemon.name}
        onClick={() => setPokemonIndex(index)}
        className={pokemonIndex === index ? "active" : ""}
      >
        {pokemon.name}
      </button>
    ));
  };

  return (
    <div>
      <nav>{parcourir(pokemonList)}</nav>
      <PokemonCard {...pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;