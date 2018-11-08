import React from 'react';

export default (props) => {
  return (
    <div key={props.todo.id} id={props.todo.id} className="todo" >
      <span 
        className={props.todo.isComplete ? "completed" : null} 
        onClick={props.toggleComplete}
      >{props.todo.text}</span>

      <button onClick={props.onDelete}>X</button>
    </div>
  );
};