import PokemonSearch from "./components/PokemonSearch/PokemonSearch";
import { useEffect, useState } from "react";
import PokemonTable from "./components/PokemonTable/PokemonTable";

function PokemonApp() {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    searchPokemon("pikachu");
  }, []);

  async function searchPokemon(name) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(name) {
    searchPokemon(name);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Pokemon Stats App</h1>
      <PokemonSearch onSearch={handleSearch} />
      <PokemonTable />
    </div>
  );
}

export default PokemonApp;
