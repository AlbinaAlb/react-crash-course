import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IUser } from '../models'

export function useUsers() {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchUsers() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IUser[]>(
        'https://fakestoreapi.com/users?limit=5'
      )
      setUsers(response.data)
      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
    
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return { users, loading, error }
}
