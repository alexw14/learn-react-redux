import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.handleDeletePerson}>I'm {props.name} and I am {props.age} years old!</p>
      <input type='text' onChange={props.handleNameChange} value={props.name}/>
    </div>
  )
};

export default person;