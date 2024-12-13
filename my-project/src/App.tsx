import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : 0);
  };

  const handleNext = () => {
    setPokemonIndex(
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex,
    );
  };

  return (
    <>
      <div>
        <PokemonCard {...pokemonList[pokemonIndex]} />
      </div>
      <button type="button" onClick={handlePrevious}>
        Précédent
      </button>
      <button type="button" onClick={handleNext}>
        Suivant
      </button>
    </>
  );
}

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

export default App;
