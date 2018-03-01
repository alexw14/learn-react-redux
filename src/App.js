import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Alex', age: "28" },
      { name: 'Kobe', age: "8" },
      { name: 'Bryant', age: "24" },
    ],
    showPersons: false
  }

  switchNameHandler = (n) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: n, age: "28" },
        { name: 'Kobe', age: "8" },
        { name: 'Bryant', age: "24" },
      ]
    })
  }

  handleNameChange = (event) => {
    this.setState({
      persons: [
        { name: 'Alex', age: "28" },
        { name: event.target.value, age: "8" },
        { name: 'Bryant', age: "24" },
      ]
    })
  }

  togglePersonsHandler = () => {
    let show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {
          this.state.showPersons ?
            <div >
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler}
                nameChange={this.handleNameChange}
              />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
            </div>
            :
            null
        }
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
