import TextInput from './TextInput'
import Button from './Button'
import { useForm } from '@/hooks/useForm'
import { INITIAL_VALUES } from '@/utils/constants'
import { useLogin } from '@/hooks/useLogin'

export default function LoginForm() {
  const { login, error, loading } = useLogin()
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { ...INITIAL_VALUES.LOGIN_FORM },
    submit: (values) => login(values),
  })

  return (
    <form
      className="flex flex-col gap-3 max-w-[280px] p-5"
      onSubmit={handleSubmit}
    >
      <TextInput
        name="email"
        label="Correo electronico:"
        value={values.email}
        onChange={handleChange}
      />
      <TextInput
        type="password"
        name="password"
        label="Contraseña"
        value={values.password}
        onChange={handleChange}
      />
      <Button className="mt-3" loading={loading} type="submit">
        Ingresar
      </Button>
      {error ? (
        <p className="text-red-600 text-center font-semibold text-sm px-2 mt-2 transition-all">
          {error}
        </p>
      ) : null}
    </form>
  )
}
