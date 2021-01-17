import { useState, useEffect, useCallback } from 'react'

import { Todo } from './useTodos'

export const useTodo = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<Todo | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)

      const resData = await fetch(
        `http://localhost:4000/todos/${id}`
      ).then((res) => res.json())

      setData(resData)
      setLoading(false)
    } catch (err) {
      setError('Sorry, something went wrong.')
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error }
}
