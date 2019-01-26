import React from 'react';

export default class Counter extends React.Component {
  state = { count: 0 };

  componentDidMount() { console.log('mounting counter', this.props.name) };
  componentWillUnmount() { console.log('unmounting counter', this.props.name) };

  handleIncrement = () => this.setState((state) => ({ count: state.count + 1 }));
  handleDecrement = () => this.setState((state) => ({ count: state.count - 1 }));

  render() {
    return (
      <section className={this.props.class}>
        <h2>Counter {this.props.name}</h2>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleDecrement}> - </button>
        <button onClick={this.handleIncrement}> + </button>
        <br />
      </section>
    );
  };
}
