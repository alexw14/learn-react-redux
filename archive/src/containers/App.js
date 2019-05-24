import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    // handling dynamic content the javascript way
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons
            persons={this.state.persons}
            handleDeletePerson={this.handleDeletePerson}
            handleNameChange={this.handleNameChange}
          />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersonsHandler={this.togglePersonsHandler}
        />
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
