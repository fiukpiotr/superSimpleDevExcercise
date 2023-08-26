const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (i = 0 ; i < todoList.length ; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  // console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);

  // console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

const nums = [10, 20, 30];

nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  console.log('this is lenght: ' + array.length);
  return array[lastIndex];
}

console.log(getLastValue([1, 20, 5, 26, 45]));

console.log(getLastValue(['hello', 'what\'s up?']));
