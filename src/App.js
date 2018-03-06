import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'a1', name: 'Alex', age: "28" },
      { id: 'b2', name: 'Kobe', age: "8" },
      { id: 'c3', name: 'Bryant', age: "24" },
    ],
    showPersons: false
  }

  handleNameChange = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // create new object
    let person = { ...this.state.persons[personIndex] };
    // alternatively, let person = Object.assign({}, this.state.persons[personIndex]);
    // assign name to the target value
    person.name = event.target.value;
    // create new copy of the persons array
    let persons = [...this.state.persons];
    // assign the new person object to the corresponding index in array
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    let show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  }

  handleDeletePerson = (personIndex) => {
    // create new array
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let btnClass = '';

    // handling dynamic content the javascript way
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                handleDeletePerson={() => this.handleDeletePerson(idx)}
                key={person.id}
                handleNameChange={(event) => this.handleNameChange(event, person.id)}
              />
            )
          })}
        </div>
      );
      btnClass = styles.Red;
    }

    // class names as declared in App.css
    // let classes = ['red', 'bold'].join(' '); // => 'red bold'

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push( styles.red ); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push( styles.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={styles.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>Watch me dynamically change!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle</button>
          {persons}
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am a React App!!!'));
    /*  the code above creates
          <div>
            <h1>Hi I am a React App!!!</h1>
          </div>
    */
  }
}

export default App;
