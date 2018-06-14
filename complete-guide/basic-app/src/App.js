import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>This is my first React App!</h1>k
    //   </div>
    // );
    
    // return React.createElement('div', null, 'h1', 'This is using the create Element function!');
    return React.createElement('div', null, React.createElement('h1', null, 'Does it work now?'));
  }
}

export default App;
