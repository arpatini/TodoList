import React, {Component} from 'react'
import TodoItem from './components/TodoItem'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      itemToAdd: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItemChange = this.addItemChange.bind(this)
    this.removeItemChange = this.removeItemChange.bind(this)
    this.handleItemAddChange = this.handleItemAddChange.bind(this)
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


  handleItemAddChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
  }


  addItemChange() {
    if (this.state.itemToAdd.length > 0) {
      this.setState(prevState => {
        const newItem = {
          id: prevState.todos.length + 1,
          text: this.state.itemToAdd,
          completed: false
        }

         const addTodo = [...prevState.todos]
         addTodo.push(newItem)
        return {
          todos: addTodo,
          itemToAdd: ""
        }
      })
    }
  }


  removeItemChange(id) {
    this.setState(prevState => {
       const removeTodo = [...prevState.todos]
       removeTodo.splice(id-1,1)
       const newTodo = removeTodo.map(item => {
         if (item.id > id-1) {
           item.id--
         }
         return item
       })
      return {
        todos: newTodo,
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
          <div style={{marginTop: "10px"}}>
              <button onClick={this.addItemChange} style={{margin: "5px"}}>+</button>
              <form>
                  <input type="text"
                         value={this.state.itemToAdd}
                         name="itemToAdd"
                         placeholder="What do you have to do today?"
                         onChange={this.handleItemAddChange}
                         style={{width: "200px"}}
                  />
              </form>
          </div>

      </div>
    )
  }
}

export default App
