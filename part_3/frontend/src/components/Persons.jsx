const Persons = ({ persons, filter, deletePerson }) => {
  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          <p>{person.name}: {person.number}</p>
          <button
            className="btn-delete"
            onClick={() => deletePerson(person.id, person.name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Persons
