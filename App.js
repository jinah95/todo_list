import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import { model } from './model/model.js'

function App() {
  this.data = []
  this.todoList = null
  this.$todoList = document.querySelector('#todo-list')
  this.$todoInput = document.querySelector("#todo-input")

  this.setState = (newData) => { 
    this.data = newData
    this.todoList = new TodoList(this.$todoList, this.data)
  }

  this.init = () => {
    this.data = model

    new TodoInput(this.$todoInput, (newTodo) => {
      const newTodoText = { name: newTodo, isCompleted : false }
      this.setState([...this.data, newTodoText])
    })
    this.todoList = new TodoList(this.$todoList, this.data)
  }

  this.init()
}

export default App
