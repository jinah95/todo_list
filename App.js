import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoAll from './components/TodoAll.js'
import { model } from './model/model.js'

function App() {
  this.data = []
  this.todoList = null
  this.$todoList = document.querySelector('#todo-list')
  this.$todoInput = document.querySelector("#todo-input")
  this.$todoTop = document.querySelector("#todo-nav-bar")

  const DATA_KEY = "todo-data";

  this.setState = (newData, type="") => {
    this.data = newData;
    localStorage.setItem(DATA_KEY, JSON.stringify(this.data))

    this.todoList.setData(this.data);
    this.todoList.render();

    if (this.$todoTop && typeof this.$todoTop.updateTodoInfo === 'function' && type === "isUpdate") {
      this.$todoTop.updateTodoInfo(this.data);
    }
  }

  this.init = () => {
    const savedData = localStorage.getItem(DATA_KEY);
    this.data = savedData ? JSON.parse(savedData) : []

    new TodoInput(this.$todoInput, (newTodo) => {
      const newTodoText = { name: newTodo, isCompleted: false, isChecked: false, isEditing: false }
      this.setState([newTodoText, ...this.data], "isUpdate")
    })

    const deleteHandler = (targetIdx, all = false) => {
      const delArray = [...this.data].filter((item, i) => all ? !item.isChecked : i !== targetIdx);
      this.setState(delArray, "isUpdate")
    }

    const doneDoingHandler = (targetIdx, all = false) => {
      const newArr = [...this.data].map((item, i) => i === targetIdx ? { ...item, isCompleted: !item.isCompleted } : targetIdx === Infinity && item.isChecked && !item.isEditing ? { ...item, isCompleted: all } : item);
      this.setState(newArr, "isUpdate");
    }

    const checkHandler = (targetIdx, all = false) => {
      const newArr = [...this.data].map((item, i) => i === targetIdx ? { ...item, isChecked: !item.isChecked } : targetIdx === Infinity ? { ...item, isChecked: all } : item);
      this.setState(newArr);
    }

    const editHandler = (targetIdx, value = '') => {
      const newArr = [...this.data].map((item, i) => i === targetIdx ? { ...item, isEditing: !item.isEditing, name : value.length > 0 ? value : item.name } : item);
      this.setState(newArr);
    }

    const actions = {
      deleteHandler,
      doneDoingHandler,
      checkHandler,
      editHandler
    }

    this.todoList = new TodoList(this.$todoList, this.data, actions)
    
    this.$todoTop = new TodoAll(this.$todoTop, this.data, actions);
  }

  this.init()
}

export default App
