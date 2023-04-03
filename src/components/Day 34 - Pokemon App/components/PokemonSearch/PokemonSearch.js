import { useState } from "react";

function PokemonSearch({ onSearch }) {
  const [pokemonName, setPokemonName] = useState("");

  function handlePokemonNameChange(event) {
    setPokemonName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(pokemonName);
    setPokemonName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handlePokemonNameChange}
        value={pokemonName}
        placeholder="Enter Pokemon Name"
      />
      <button>Search</button>
    </form>
  );
}

export default PokemonSearch;
