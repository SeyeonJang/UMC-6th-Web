import { useState } from 'react'
import '../styles/Todo.css'
import TodoComponent from '../components/TodoComponent.jsx'
import CompletedComponent from '../components/CompletedComponent.jsx'

function App() {
  return (
    <>
      <div className='bodyBox'>
        <h1>UMC Study Plan</h1>
        <hr id="hr_big"/>
        <input type="text" id="todo_input" onkeyup="enterkey()" placeholder='UMC 스터디 계획을 작성해보세요!'></input>

        <div class="todoText">
          <div class="todoBox">
              <h4>해야 할 일</h4>
              <hr id="hr_small"/>
              <TodoComponent/>
              
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
