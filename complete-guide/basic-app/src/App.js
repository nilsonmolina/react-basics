import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Linh', age: 25},
      { name: 'Mark', age: 22},
      { name: 'Edouard', age: 19}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DONT DO THIS:
    // this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 25},
        { name: 'Mark', age: 22},
        { name: 'Edouard', age: 18}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Linh', age: 25},
        { name: event.target.value, age: 22},
        { name: 'Edouard', age: 19}
      ]
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
        <h1>This is my first React App!</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Linhy Poo')} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
           />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Linh')}
          changed={this.nameChangeHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        
        {/*
        <Person name="Mark" age="22" />
        <Person name="Linh" age="25">My Hobbies: Racing</Person>
        <Person name="Edouard" age="19" /> 
        */}
      </div>
    );
    
    // return React.createElement('div', null, 'h1', 'This is using the create Element function!');
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
