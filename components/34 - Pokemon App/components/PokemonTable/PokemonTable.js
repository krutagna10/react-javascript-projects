function PokemonTable({ pokemon }) {
  const { name, base_experience, sprites, stats, types } = pokemon;

  return (
    <table>
      <thead>
        <tr>
          <th>Pokemon Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>Base Experience</th>
          <th>HP</th>
          <th>Attack</th>
          <th>Defence</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name.toUpperCase()}</td>
          <td>
            <img src={sprites.front_default} alt={pokemon.name} />
          </td>
          <td>{types[0].type.name.toUpperCase()}</td>
          <td>{base_experience}</td>
          <td>{stats[0].base_stat}</td>
          <td>{stats[1].base_stat}</td>
          <td>{stats[2].base_stat}</td>
          <td>{stats[5].base_stat}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PokemonTable;
