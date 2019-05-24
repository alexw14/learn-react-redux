import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  let classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Red;
  }
  if (props.persons.length <= 2) {
    classes.push(styles.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>Watch me dynamically change!</p>
      <button className={btnClass} onClick={props.togglePersonsHandler}>Toggle</button>
    </div>
  );
};

export default cockpit;