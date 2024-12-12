import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PokemonCard />
      </div>
    </>
  );
}

export default App;
