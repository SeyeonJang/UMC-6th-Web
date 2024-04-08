import '../styles/Todo.css'

function TodoComponent() {
    return (
        <>
            <div class="oneTodo">
                <div class="spanTodo">
                    <h4 id="text_todo_left">HTML</h4>
                    <button id="todo_complete">완료</button>
                </div>
                <hr class="hr_middle"/>
            </div>
        </>
    )
}

export default TodoComponent