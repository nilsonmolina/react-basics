import React from 'react';

export default class Counter extends React.Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  handleIncrement = () => this.setState((state) => ({ count: state.count + 1 }));
  handleDecrement = () => {
    if (this.state.count < 1) return;
    this.setState((state) => ({ count: state.count - 1 }));
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getCountClasses()}>{this.formatCount()}</span>
        <button className="btn btn-increment" onClick={this.handleIncrement}>increment</button>
        <button className="btn btn-decrement" onClick={this.handleDecrement}>decrement</button>
        <ul>
          { this.state.tags.map((tag, index) => <li key={ index }>{ tag }</li>) }
        </ul>
      </React.Fragment>
    );
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getCountClasses() {
    let classes = 'count ';
    this.state.count === 0 ? classes += 'warning ' : classes += 'info '
    return classes;
  };
}