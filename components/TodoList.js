// import TodoItemEdit from "./TodoItemEdit"

function TodoList($container, data, actions) {
  this.$container = $container
  this.data = data

  this.setData = function (newData) {
    this.data = newData
  }

  this.render = function () {
    this.$container.innerHTML = `<ul>${this.data
      .map((todo, i) => `<li class=${todo.isCompleted ? "todo-done" : "todo-ing"} data-index=${i}><input type="checkbox" data-index=${i} name=${`check-${i}`} ${todo.isChecked ? "checked" : ""} />
      ${todo.isEditing ? `<input class="edit-input" type="text" name=${`edit-name-${i}`} data-index=${i} value=${todo.name} /><button name="edit-complete" data-index=${i}>완료</button><button name="edit-cancled" data-index=${i}>취소</button>` : `${todo.name}${!todo.isCompleted ? `<button class="edit-button" name="edit-button" data-index=${i} >${todo.isEditing ? "완료" : "수정"}</button>`:''}`}<button class="delete-button" name="delete-button" data-index=${i} type="button">X</button></li>`)
      .join('')} </ul>`

    // 삭제 & 수정 (수정 완료 / 취소 / 수정 하기)
    const buttons = this.$container.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetIdx = parseInt(e.target.dataset.index, 10);
        if (button.name === 'delete-button') {
          actions.deleteHandler(targetIdx)
        } else if (button.name === 'edit-button') {
          actions.editHandler(targetIdx)
        } else if (button.name === 'edit-cancled') {
          actions.editHandler(targetIdx)
        } else if (button.name === 'edit-complete') {
          const editValue = this.$container.querySelectorAll(`[name="edit-name-${targetIdx}"]`)[0];
          actions.editHandler(targetIdx, editValue.value)
        }
      })
    }
    )

    // 완료
    const todos = this.$container.querySelectorAll('li');
    todos.forEach((todo, i) => {
      if (!this.data[i].isEditing) {
        todo.addEventListener('click', (e) => {
          const targetIdx = parseInt(e.target.dataset.index, 10);
          actions.doneDoingHandler(targetIdx)
        })
      }
    })

    // 체크박스
    const checks = this.$container.querySelectorAll('input');
    checks.forEach(check => {
      check.type === 'checkbox' &&
        check.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetIdx = parseInt(e.target.dataset.index, 10);
          actions.checkHandler(targetIdx)
        })
    })

  }

  this.render()
}

export default TodoList
