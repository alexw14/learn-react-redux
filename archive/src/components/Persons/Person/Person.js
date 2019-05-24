import React from 'react';

import styles from './Person.css';

const person = (props) => {
  return (
    <div className={ styles.Person }>
      <p onClick={props.handleDeletePerson}>I'm {props.name} and I am {props.age} years old!</p>
      <input type='text' onChange={props.handleNameChange} value={props.name}/>
    </div>
  )
};

export default person;