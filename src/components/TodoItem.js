import React from 'react'

function TodoItem(props) {
  const completedStyle = {
    textDecoration: "line-through",
    color: "gray"
  }

  return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={props.td.completed}
          onChange={() => props.handleChange(props.td.id)}
          />
        <p style={ props.td.completed ? completedStyle : null }>{props.td.text}</p>
        <button onClick={() => props.removeItemChange(props.td.id)}
                style={{margin: "5px", position: "absolute", right: "10px"}}>
        -</button>
      </div>
  )
}

export default TodoItem
