import { useState } from 'react'

import { Todo } from './useTodos'

export const useAddTodo = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const addTodo = async (newTodo: Omit<Todo, 'id'>) => {
    try {
      setLoading(true)

      const resData = await fetch('http://localhost:4000/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json())

      if (resData) {
        setSuccess(true)
        setLoading(false)
      }
    } catch (err) {
      setError('Sorry, something went wrong.')
      setLoading(false)
      setSuccess(false)
    }
  }

  return { addTodo, loading, success, error }
}
