import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Alex', age: "28" },
      { name: 'Kobe', age: "8" },
      { name: 'Bryant', age: "24" },
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
