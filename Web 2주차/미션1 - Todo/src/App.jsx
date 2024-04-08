import { useState } from 'react'
import '../styles/Todo.css'
import TodoComponent from '../components/TodoComponent.jsx'
import CompletedComponent from '../components/CompletedComponent.jsx'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      const newTodo = event.target.value;
      setTodos([...todos, newTodo]); // 기존에 todos 배열과 newTodo 배열을 합쳐서 만들기
      setInputValue(""); // 입력창 초기화
    }
  }

  return (
    <>
      <div className='bodyBox'>
        <h1>UMC Study Plan</h1>
        <hr id="hr_big"/>
        <input type="text" id="todo_input" value={inputValue} placeholder='UMC 스터디 계획을 작성해보세요!'
          onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleEnterKey}/>

        <div class="todoText">
          <div class="todoBox">
              <h4>해야 할 일</h4>
              <hr id="hr_small"/>
              {todos.map((todo,index) => (
                <TodoComponent key={index} text={todo}/>
              ))}
              
          </div>
          <div class="todoBox">
              <h4>해낸 일</h4>
              <hr id="hr_small"/>
              <CompletedComponent/>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
