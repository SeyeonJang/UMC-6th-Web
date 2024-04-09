import '../styles/Todo.css'

function CompletedComponent({text}) {
    return (
        <>
            <div class="oneTodo">
                <div class="spanTodo">
                    <h4 id="text_todo_rigft">{text}</h4>
                    <button id="todo_delete">삭제</button>
                </div>
                <hr class="hr_middle"/>
            </div> 
        </>
    )
}

export default CompletedComponent