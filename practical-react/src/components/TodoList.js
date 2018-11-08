import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todosFilter: 'all',
  }

  addTodo = (todo) => { 
    // this.setState({ todos: [todo, ...this.state.todos] });
    this.setState((state) => ({ todos: state.todos.concat(todo) }));
   };

  updateTodosFilter = (filter) => {
    this.setState({ todosFilter: filter });
  }

  toggleComplete = (e) => {
    const todos = this.state.todos.map((t) => {
    if (t.id === e.target.parentNode.id) {
      return { ...t, isComplete: !t.isComplete };
    } else return t;
    });
    this.setState({ todos });
  };

  handleDeleteTodo = (id) => {
    this.setState( (state) => ({ 
      todos: state.todos.filter(t => t.id !== id) 
    }));
  };

  removeAllComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter(t => !t.isComplete)
    }));
  };

  render() {
    let todos = [];
    if (this.state.todosFilter === 'all') {
      todos = this.state.todos;
    } else if (this.state.todosFilter === 'active') {
      todos = this.state.todos.filter(td => !td.isComplete);
    } else if (this.state.todosFilter === 'complete') {
      todos = this.state.todos.filter(td => td.isComplete);
    }

    return (
      <section className="TodoList">
        <h2>Todo List</h2>
        <TodoForm add={this.addTodo} />
        
        <div>Todo's left: {todos.filter(td => !td.isComplete).length}</div>

        <button onClick={() => this.updateTodosFilter('all')}>all</button>
        <button onClick={() => this.updateTodosFilter('active')}>active</button>
        <button onClick={() => this.updateTodosFilter('complete')}>complete</button>
        <br/>

        { this.state.todos.some(t => t.isComplete)
          ? <button onClick={this.removeAllComplete}>remove completed todos</button>
          : null }

        { todos.map((todo) => (
          <Todo key={todo.id} todo={todo} 
            onDelete={() => this.handleDeleteTodo(todo.id)} toggleComplete={this.toggleComplete}
          />
        ))}
      </section>
    );
  };
}