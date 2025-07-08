function TodoAll($container, data) {

    const $topBar = document.createElement('div');
    $topBar.id = 'top-nav-bar'

    $topBar.innerHTML = `
    <input type="checkbox" name="all-check" />
    <div>
        <button>완료</button>
        <button>삭제</button>
    </div>
  `

    const $todoInfo = document.createElement('div');
    $todoInfo.id = 'top-todo-info';

    const $doneSpan = document.createElement('span');
    const $totalSpan = document.createElement('span');
    $todoInfo.appendChild($doneSpan);
    $todoInfo.appendChild(document.createTextNode(' / '));
    $todoInfo.appendChild($totalSpan);

    function updateTodoInfo(newData) {
        const doneCount = newData.filter(todo => todo.isCompleted).length;
        $doneSpan.textContent = `[ 완료 : ${doneCount}`;
        $totalSpan.textContent = `전체 : ${newData.length} ]`;
    }

    updateTodoInfo(data);

    $container.appendChild($todoInfo);
    $container.appendChild($topBar);

    return {
        updateTodoInfo
    };
}

export default TodoAll