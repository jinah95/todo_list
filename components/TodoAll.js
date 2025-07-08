function TodoAll($container, data, actions) {

    const $topBar = document.createElement('div');
    $topBar.id = 'top-nav-bar'

    $topBar.innerHTML = `
    <input type="checkbox" name="all-check" id="all-check" />
    <div>
        <button id="all-done">완료</button>
        <button id="all-delete">삭제</button>
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

    const $allCheckInput = $topBar.querySelector('#all-check');
    $allCheckInput.addEventListener('click', (e) => {
        const isChecked = e.target.checked;
        actions.checkHandler(Infinity, isChecked);
    });

    const $allDoneButton = $topBar.querySelector('#all-done');
    $allDoneButton.addEventListener('click', (e) => {
        actions.doneDoingHandler(Infinity, true)
    })

    const $allDeleteButton = $topBar.querySelector('#all-delete');
    $allDeleteButton.addEventListener('click', (e) => {
        actions.deleteHandler(Infinity, true)
    })

    $container.appendChild($todoInfo);
    $container.appendChild($topBar);

    return {
        updateTodoInfo
    };
}

export default TodoAll