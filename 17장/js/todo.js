// 웹 요소 가져오기
const todoInput = document.querySelector('#todo-input');    // 사용자 입력
const addButton = document.querySelector('#add-button');   // 추가 버튼
const todoList = document.querySelector('#todo-list');

// 이벤트 처리
document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', manageTodo);

// 함수
function addTodo(e) {
    e.preventDefault();
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);

    saveToLocal(todoInput.value);

    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
    todoInput.value = "";
}

function saveToLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocal() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-content');
        newDiv.appendChild(newTodo);

        const completeButton = document.createElement('button');
        completeButton.innerText = '완료';
        completeButton.classList.add('complete-button');
        newDiv.appendChild(completeButton);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton);

        todoList.appendChild(newDiv);
        
        todoInput.value = "";
    });
}

function manageTodo(e) {
    const whichButton = e.target.classList[0];
    if (whichButton === 'complete-button') {
        const todo = e.target.parentElement;
        todo.children[0].classList.toggle('completed');
    } else if (whichButton === 'delete-button') {
        const todo = e.target.parentElement;
        removeLocal(todo);
        todo.remove();
    }
}

function removeLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const index = todos.indexOf(todo.children[0].innerText);
    console.log(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}