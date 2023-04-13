import BirthdayItem from "../BirthdayItem/BirthdayItem";

function BirthdayList({ persons, onRemovePerson }) {
  return (
    <>
      <h2 className="text--center">Birthday List</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>Remove Button</th>
          </tr>
        </thead>
        <tbody>
          {persons.length === 0 ? (
            <tr>
              <td colSpan="4">No Birthday Remainders</td>
            </tr>
          ) : (
            <>
              {persons.map((person, index) => (
                <BirthdayItem
                  key={person.id}
                  index={index}
                  {...person}
                  onRemovePerson={onRemovePerson}
                />
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}

export default BirthdayList;
