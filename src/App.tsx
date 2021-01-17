import React, { useState } from 'react'

import Todos from './components/Todos'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

import './App.css'

function App() {
  const [todoId, setTodoId] = useState(-1)

  return (
    <div className='App'>
      <div className='add-todo'>
        <AddTodo />
      </div>

      <div>
        {todoId > -1 ? (
          <Todo todoId={todoId} setTodoId={setTodoId} />
        ) : (
          <Todos setTodoId={setTodoId} />
        )}
      </div>
    </div>
  )
}

export default App
