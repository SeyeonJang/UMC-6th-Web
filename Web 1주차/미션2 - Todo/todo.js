let userTodo = document.getElementById('todo_input');
let btnTodoComplete = document.getElementById('todo_complete');
let btnTodoDelete = document.getElementById('todo_delete');
// let todoBox = document.querySelector('.todoText');
// let todoListContainer = document.querySelector('.todoBox:first-child.todoBox');

let todoList = [];
let completedList = [];

function displayTodoList() { // 목록 보여주기 (업데이트 포함)
    let todoBox = document.querySelector('.todoBox:first-child.todoBox');
    let todoListContainer = todoBox.querySelector('.oneTodo');
    todoListContainer.innerHTML = ''; // 기존 목록 삭제
    todoList.forEach(todo => {
        let todoItem = document.createElement('div');
        todoItem.classList.add('oneTodo');
        let spanTodo = document.createElement('div');
        spanTodo.classList.add('spanTodo'); 
        let todoText = document.createElement('h4');
        todoText.textContent = todo;
        let completeButton = document.createElement('button');
        completeButton.textContent = "완료";
        completeButton.classList.add('todo_complete');
        let hrMiddle = document.createElement('hr');
        hrMiddle.classList.add('hr_middle');
        
        spanTodo.appendChild(todoText);
        spanTodo.appendChild(completeButton);
        todoItem.appendChild(spanTodo);
        todoItem.appendChild(hrMiddle);
        todoListContainer.appendChild(todoItem);
        // let todoItem = document.createElement('div');
        // todoItem.textContent = todo;
        // todoListContainer.appendChild(todoItem);
    })
}

userTodo.addEventListener("keydown", function(event) { // input 엔터 -> TodoList 추가
    if (event.key === 'Enter') {
        if (userTodo.value.trim() !== '') {
            todoList.push(userTodo.value);
            userTodo.value = ''; // 초기화
            displayTodoList();
        }
    }
})

btnTodoComplete.addEventListener("click", ()=>{
    
});