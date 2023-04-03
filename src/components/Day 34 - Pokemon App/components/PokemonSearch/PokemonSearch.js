import { useState } from "react";

function PokemonSearch({ onSearch }) {
  const [pokemonName, setPokemonName] = useState("");

  function handlePokemonNameChange(event) {
    setPokemonName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(pokemonName);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" onChange={handlePokemonNameChange} />
      <button>Search</button>
    </form>
  );
}

export default PokemonSearch;
