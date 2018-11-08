import React from 'react';
import shortid from 'shortid';

const initialState = { todo: '' };

export default class TodoForm extends React.Component {
  state = initialState;

  handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }); };
  handleSubmit = (e) => { 
    e.preventDefault();
    this.props.add({
      id: shortid.generate(),
      text: this.state.todo,
      isComplete: false,
    });
    this.setState(initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="todo..." name="todo" 
          value={this.state.todo} onChange={this.handleChange}
        />
        <button>add todo</button>
      </form>
    );
  };
}