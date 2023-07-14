import { useState } from 'react'

export const useForm = ({ initialValues = {}, submit }) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (ev) => {
    const { value, name } = ev.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    submit(values)
  }

  const resetFormValues = () => {
    setValues(initialValues)
  }

  return { handleChange, handleSubmit, resetFormValues, values }
}
