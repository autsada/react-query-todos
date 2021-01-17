import React, { useState, useEffect } from 'react'

import { useAddTodo } from '../hooks/useAddTodo'

interface Props {}

const AddTodo: React.FC<Props> = () => {
  const [title, setTitle] = useState('')
  const { addTodo, loading, success, error } = useAddTodo()

  useEffect(() => {
    if (success) setTitle('')
  }, [success])

  return (
    <div>
      <div>
        <h4>Add Todo</h4>

        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button
          style={{ cursor: 'pointer' }}
          disabled={loading}
          onClick={() => {
            addTodo({ title, completed: false, userId: 11 })
          }}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>

      {error && <p>{error}</p>}
    </div>
  )
}

export default AddTodo
