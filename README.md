# React Basics

This repo holds projects I worked on while learning the basics of react.


**Burger Builder Site:** _https://burger-builder-n13.firebaseapp.com/_


# React Components
```javascript
// App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank">Learn React</a>
        </header>
      </div>
    );
  }
}

export default App;
```
### Class Component
We can easily create other components and render them using a tag. Below is an example of a `Class Component`. In this example, we refactored the header from the 'App' component, into its own 'Header' component.
```javascript
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank">Learn React</a>
            </header>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
```
### Functional Component
Another way is to use a `Functional Component`. All of the examples below are equivalent to eachother:
```javascript
// ES6 SHORTHAND VERSION - MY PREFERED WAY
const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank">Learn React</a>
    </header>
);
// EQUIVALENT TO THE FIRST ONE
const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a className="App-link" href="https://reactjs.org" target="_blank">Learn React</a>
        </header>
    );
}
// OLD SCHOOL FUNCTION
function Header {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a className="App-link" href="https://reactjs.org" target="_blank">Learn React</a>
        </header>
    );
}
```
### Passing Data
To pass data to a class Component, we can add attributes to the tag and then in the component, we use the `this.props` object to access the data.
```javascript
class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.greeting} Agent {this.props.num}</p>
          <p>
            Name: {this.props.myObj.name}<br/>
            Age: {this.props.myObj.age}<br/>
            obj: {JSON.stringify(this.props.myObj)}<br/>
            arr: {this.props.myArr}<br/>
            constFunc: {this.props.constFunc(6,7)}<br/>
            inlineFunc: {this.props.inlineFunc(6,7)}<br/>
            classFunc: {this.props.classFunc(6,7)}<br/>
            {console.log(this.props.myObj)}
          </p>
      </header>
    );
  }
};

class App extends Component {
  add(a, b) { return a + b}
  render() {
    const add = (a, b) => a + b; 
    return (
      <div className="App">
        <Header greeting="Hello" num={13} myObj={{ name: 'Nilson', age: 27 }} myArr={[1,2,3]} constFunc={add} inlineFunc={(a, b) => a + b} classFunc={this.add} />
      </div>
    );
  }
}
```

Passing data to a functional Component is fairly similar, as you can see below:
```javascript

const Header = (props) => (
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{props.greeting} Agent {props.num}</p>
      <p>
        Name: {props.myObj.name}<br/>
        Age: {props.myObj.age}<br/>
        obj: {JSON.stringify(props.myObj)}<br/>
        arr: {props.myArr}<br/>
        constFunc: {props.constFunc(6,7)}<br/>
        inlineFunc: {props.inlineFunc(6,7)}<br/>
        classFunc: {props.classFunc(6,7)}<br/>
        {console.log(props.myObj)}
      </p>
  </header>
);

class App extends Component {
  add(a, b) { return a + b}
  render() {
    const add = (a, b) => a + b; 
    return (
      <div className="App">
        <Header greeting="Hello" num={13} myObj={{ name: 'Nilson', age: 27 }} myArr={[1,2,3]} constFunc={add} inlineFunc={(a, b) => a + b} classFunc={this.add} />
      </div>
    );
  }
}
```

### Exporting
We usually want to have our files contain a single component, or only highly related ones.  In order to use components that are not in the same file, we need to import and export.
```javascript
import React from 'react'
import logo from '../logo.svg';

/*---------------------
  DEFAULT EXPORT
    import Header from './components/Header';
---------------------*/
export default (props) => (
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{props.greeting} Agent {props.num}</p>
      <p>
        Name: {props.myObj.name}<br/>
        Age: {props.myObj.age}<br/>
        obj: {JSON.stringify(props.myObj)}<br/>
        arr: {props.myArr}<br/>
        constFunc: {props.constFunc(6,7)}<br/>
        inlineFunc: {props.inlineFunc(6,7)}<br/>
        classFunc: {props.classFunc(6,7)}<br/>
        {console.log(props.myObj)}
      </p>
  </header>
);

/*---------------------
  NAMED EXPORTS
  import { Header2, Header3 } from './components/Header';
---------------------*/
export const Header2 = (props) => (
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{props.greeting} Agent {props.num}</p>
      <p>
        Name: {props.myObj.name}<br/>
        Age: {props.myObj.age}<br/>
        obj: {JSON.stringify(props.myObj)}<br/>
        arr: {props.myArr}<br/>
        constFunc: {props.constFunc(6,7)}<br/>
        inlineFunc: {props.inlineFunc(6,7)}<br/>
        classFunc: {props.classFunc(6,7)}<br/>
        {console.log(props.myObj)}
      </p>
  </header>
);

export class Header3 extends React.Component {
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.greeting} Agent {this.props.num}</p>
          <p>
            Name: {this.props.myObj.name}<br/>
            Age: {this.props.myObj.age}<br/>
            obj: {JSON.stringify(this.props.myObj)}<br/>
            arr: {this.props.myArr}<br/>
            constFunc: {this.props.constFunc(6,7)}<br/>
            inlineFunc: {this.props.inlineFunc(6,7)}<br/>
            classFunc: {this.props.classFunc(6,7)}<br/>
            {console.log(this.props.myObj)}
          </p>
      </header>
    );
  }
};
```
### State
Below is the proper way to setup and modify state.
```javascript
export default class Counter extends React.Component {
  state = { 
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    );
  };
}
```