function TodoList($container, data, deleteTodo, doneDoingTodo) {
  this.$container = $container
  this.data = data

  this.setData = function (newData) {
    this.data = newData
  }

  this.render = function () {
    this.$container.innerHTML = `<ul>${this.data
      .map((todo, i) => `<li class=${todo.isCompleted ? "todo-done" : "todo-ing"} data-index=${i}>${todo.name}<button id="delete-button" data-index=${i} type="button">X</button></li>`)
      .join('')} </ul>`

    // 삭제
    const delButtons = this.$container.querySelectorAll('button');
    delButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetIdx = parseInt(e.target.dataset.index, 10);
        deleteTodo(targetIdx)
      })
    }
    )

    // 완료
    const todos = this.$container.querySelectorAll('li');
    todos.forEach(todo => {
      todo.addEventListener('click', (e) => {
        const targetIdx = parseInt(e.target.dataset.index, 10);
        doneDoingTodo(targetIdx)
      })
    })

  }

  this.render()
}

export default TodoList
