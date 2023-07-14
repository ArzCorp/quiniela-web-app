import { EMPTY_STRING, METHODS } from '@/utils/constants'
import { request } from '@/utils/request'
import { useState } from 'react'

export const useLogin = () => {
  const [error, setError] = useState(EMPTY_STRING)
  const [loading, setLoading] = useState(false)

  const login = async (body) => {
    setLoading(true)
    setError(EMPTY_STRING)

    try {
      const response = await request({
        endpoint: '/login',
        method: METHODS.POST,
        body,
      })

      console.log(response)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return { login, error, loading }
}
