import { useState } from 'react'
import '../styles/Todo.css'

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
              
              {/* <div class="oneTodo">
                  <div class="spanTodo">
                      <h4 id="text_todo_left">HTML</h4>
                      <button id="todo_complete">완료</button>
                  </div>
                  <hr class="hr_middle"/>
              </div> */}
          </div>
          <div class="todoBox">
              <h4>해낸 일</h4>
              <hr id="hr_small"/>

              {/* <div class="oneTodo">
                  <div class="spanTodo">
                      <h4 id="text_todo_rigft">HTML</h4>
                      <button id="todo_delete">삭제</button>
                  </div>
                  <hr class="hr_middle"/>
              </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
