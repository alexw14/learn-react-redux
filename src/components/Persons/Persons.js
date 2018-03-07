import React from 'react';

import Person from './Person/Person';


const persons = (props) => props.persons.map((person, idx) => {
  return <Person
    name={person.name}
    age={person.age}
    handleDeletePerson={() => props.handleDeletePerson(idx)}
    key={person.id}
    handleNameChange={(event) => props.handleNameChange(event, person.id)}
    />
});

export default persons;