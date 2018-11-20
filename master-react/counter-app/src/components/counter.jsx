import React from 'react';

export default class Counter extends React.Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => this.setState((state) => ({ value: state.value + 1 }));
  handleDecrement = () => {
    if (this.state.value < 1) return;
    this.setState((state) => ({ value: state.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <span className={this.getCountClasses()}>{this.formatCount()}</span>
        <button className="btn btn-increment" onClick={this.handleIncrement}>increment</button>
        <button className="btn btn-decrement" onClick={this.handleDecrement}>decrement</button>
      </div>
    );
  };

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getCountClasses() {
    let classes = 'count ';
    this.state.value === 0 ? classes += 'warning ' : classes += 'info '
    return classes;
  };
}
