import React, {Component} from 'react'
import TodoItem from './components/TodoItem'
import todoData from './todosData'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItemChange = this.addItemChange.bind(this)
    this.removeItemChange = this.removeItemChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  addItemChange() {
    this.setState(prevState => {
      const newItem = {
        id: prevState.length + 1,
        text: "",
        completed: false
      }

       const addTodo = [...prevState.todos]
       addTodo.push(newItem)
      return {
        todos: addTodo
      }
    })
  }

  removeItemChange() {
    this.setState(prevState => {
       const removeTodo = [...prevState.todos]
       removeTodo.pop()
      return {
        todos: removeTodo
      }
    })
  }


  render() {
    const tdItems = this.state.todos.map(item => <TodoItem
                                                    key={item.id}
                                                    td={item}
                                                    handleChange={this.handleChange}
                                                    removeItemChange={this.removeItemChange}
                                                  />)


    return (
      <div className="todo-list">
          {tdItems}
          <div style={{display: "inline"}}>
              <button onClick={this.addItemChange} style={{margin: "5px"}}>+</button>
              <textarea style={{margin: "5px", position: "relative", top: "10px"}}> What do you have to do today?</textarea>
          </div>

      </div>
    )
  }
}

export default App
