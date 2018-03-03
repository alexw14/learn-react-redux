import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  let style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }


  return (
    <div className='Person' style={style}>
      <p onClick={props.handleDeletePerson}>I'm {props.name} and I am {props.age} years old!</p>
      <input type='text' onChange={props.handleNameChange} value={props.name}/>
    </div>
  )
};

export default Radium(person);