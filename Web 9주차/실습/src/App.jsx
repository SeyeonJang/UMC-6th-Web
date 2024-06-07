import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputTodo from './components/InputTodo/InputTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputTodo/>
      <TodoList/>
    </>
  )
}

export default App
