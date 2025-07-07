function TodoInput($container, addTodo) {
  const $form = document.createElement('form');
  $form.innerHTML = `
    <input type="text" placeholder="할 일을 입력해주세요." />
    <button type="submit">추가</button>
  `

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $form.querySelector('input');
    const value = input.value.trim();
    if (value) {
        addTodo(value)
        input.value = ''
    }
  })

  $container.appendChild($form);
}

export default TodoInput