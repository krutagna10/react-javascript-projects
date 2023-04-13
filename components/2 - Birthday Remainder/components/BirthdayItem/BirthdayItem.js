function BirthdayItem({ index, id, name, age, onRemovePerson }) {
  function handleRemovePerson() {
    onRemovePerson(id);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={handleRemovePerson}>Remove</button>
      </td>
    </tr>
  );
}

export default BirthdayItem;
