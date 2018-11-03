import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Basics from './components/Basics';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';
import BasicForm from './components/BasicForm';
import OptimizedForm from './components/OptimizedForm';
import ValidationForm from './components/ValidationForm';
import FetchRandomPerson from './components/FetchRandomPerson';
import FetchRandomPeople from './components/FetchRandomPeople';

class App extends Component {
  state = {
    visible: true,
  };

  outerAdd(a, b) { return a + b };

  render() {
    const add = (a, b) => a + b;
    const toggleButton = (
    <button 
      onClick={() => this.setState({visible: !this.state.visible})}
    >toggle counter</button>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Basics 
          greeting="Hello" num={13} myObj={{ name: 'Nilson', age: 27 }} myArr={[1,2,3]} constFunc={add} inlineFunc={(a, b) => a + b} classFunc={this.outerAdd} btn={toggleButton}
        />

        { this.state.visible ? <Counter name="1" /> : null }
        <Counter name="2" class={this.state.visible ? "Counter" : "hidden"} />

        <ImageSlider />
        <BasicForm />
        <OptimizedForm />
        <ValidationForm />
        <FetchRandomPerson />
        <FetchRandomPeople />
      </div>
    );
  };
}

export default App;
