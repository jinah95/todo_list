import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import { model } from './model/model.js'

function App() {
  this.data = []
  this.todoList = null
  this.$todoList = document.querySelector('#todo-list')
  this.$todoInput = document.querySelector("#todo-input")

  const DATA_KEY = "todo-data";

  this.setState = (newData) => { 
    this.data = newData;
    localStorage.setItem(DATA_KEY, JSON.stringify(this.data))

    this.todoList.setData(this.data);
    this.todoList.render();
  }

  this.init = () => {
    const savedData = localStorage.getItem(DATA_KEY);
    this.data = savedData ? JSON.parse(savedData) : model

    new TodoInput(this.$todoInput, (newTodo) => {
      const newTodoText = { name: newTodo, isCompleted : false }
      this.setState([...this.data, newTodoText])
    })

    const deleteHandler = (targetIdx) => {
      const delArray = [...this.data].filter((item, i) => i !== targetIdx);
      this.setState(delArray)
    }

    this.todoList = new TodoList(this.$todoList, this.data, deleteHandler)
  }

  this.init()
}

export default App
