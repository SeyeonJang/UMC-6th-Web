import Modal from '../components/Modal.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="btn_open_modal">버튼 열기</button>
      <Modal/>
    </>
  )
}

export default App