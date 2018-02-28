import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <input type='text' onChange={props.nameChange} value={props.name}/>
    </div>
  )
};

export default person;