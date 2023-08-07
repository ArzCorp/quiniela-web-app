'use client'

import { useState } from 'react'
import TextInput from './TextInput'

export default function LoginForm() {
  const [error, setError] = useState(false)
  const [loginData, setLoginData] = useState()

  const handleChange = (e) => {
    const { name: inputName, value } = e.target
    if (value.length >= 6) {
      setError('Ocurrio un error')
    } else {
      setError(false)
    }

    setLoginData({
      ...loginData,
      [inputName]: value,
    })
  }

  return (
    <form>
      <TextInput
        name="name"
        error={error}
        label="Nombre:"
        onChange={handleChange}
      />
    </form>
  )
}
