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
      <input class="edit-input" type="text" name=${`edit-name-${i}`} data-index=${i} value="${todo.name}" ${todo.isEditing ? "" : "readonly"} /> 
      <div class="todo-item-buttons">
      ${todo.isEditing ? `<button name="edit-complete" data-index=${i}>완료</button><button name="edit-cancled" data-index=${i}>취소</button>` : !todo.isCompleted ? `<button class="edit-button" name="edit-button" data-index=${i} >${todo.isEditing ? "완료" : "수정"}</button>` : ''}
      <button id="delete-button" name="delete-button" data-index=${i} type="button">X</button>
      </div>
      </li>`)
      .join('')} </ul>`

  
   const $ul = this.$container.querySelector('ul');

      // tag name 으로 click event 분기 (제거 / 편집 / 완료 / 체크박스)
   $ul.addEventListener('click', (e) => {
      const name = e.target.name;
      const index = parseInt(e.target.dataset.index, 10);
      if (isNaN(index)) return;

      if (name === 'delete-button') {
        actions.deleteHandler(index);
      } else if (name === 'edit-button' || name === 'edit-cancled') {
        actions.editHandler(index);
      } else if (name === 'edit-complete') {
        const editInput = this.$container.querySelector(`[name="edit-name-${index}"]`);
        actions.editHandler(index, editInput.value);
      } else if (name && name.startsWith('edit-name')) {
        if (!this.data[index].isEditing) {
          actions.doneDoingHandler(index);
        }
      } else if (name && name.startsWith('check-')) {
        actions.checkHandler(index);
      }
    });

  }

  this.render()
}

export default TodoList
