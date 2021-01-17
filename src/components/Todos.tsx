import React from 'react'

import { useTodos } from '../hooks/useTodos'

interface Props {
  setTodoId: (id: number) => void
}

const Todos: React.FC<Props> = ({ setTodoId }) => {
  const { data, isLoading, error } = useTodos()

  if (isLoading) return <h4 style={{ color: 'red' }}>Loading...</h4>

  if (error) return <p>{error}</p>

  return (
    <div>
      {data &&
        data
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <p key={todo.id}>
              <a href='#' onClick={() => setTodoId(todo.id)}>
                {todo.title}
              </a>
            </p>
          ))}
    </div>
  )
}

export default Todos
