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

  render() {
    const tdItems = this.state.todos.map(item => <TodoItem
                                                    key={item.id}
                                                    td={item}
                                                    handleChange={this.handleChange}
                                                  />)

    return (
      <div className="todo-list">
          {tdItems}
      </div>
    )
  }
}

export default App
