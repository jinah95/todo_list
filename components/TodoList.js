function TodoList($container, data, deleteTodo) {
  this.$container = $container
  this.data = data

  this.setData = function (newData) {
    this.data = newData
  }

  this.render = function () {
    this.$container.innerHTML = `<ul>${this.data
      .map((todo, i) => `<li>${todo.name}<button id="delete-button" data-index=${i} type="button">X</button></li>`)
      .join('')} </ul>`

    const delButtons = this.$container.querySelectorAll('button');
    delButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const targetIdx = parseInt(e.target.dataset.index, 10);
        deleteTodo(targetIdx)
      })
    }
    )

  }

  this.render()
}

export default TodoList
