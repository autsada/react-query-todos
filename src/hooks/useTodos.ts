import { useState, useEffect } from 'react'

export type Todo = {
  id: number
  title: string
  completed: boolean
  userId: number
}

export const useTodos = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<Todo[] | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const resData = await fetch('http://localhost:4000/todos').then((res) =>
        res.json()
      )

      setData(resData)
      setLoading(false)
    } catch (err) {
      setError('Sorry, something went wrong.')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error }
}
