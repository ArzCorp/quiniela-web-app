import Button from '@/components/Button'
import Layout from '@/components/Layout'
import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import { ROUTES } from '@/utils/constants'

export default function Login() {
  return (
    <Layout center>
      <section>
        <header className="text-center">
          <h2 className="text-xl font-extrabold mb-2">Quinielas Sngular</h2>
        </header>
        <LoginForm />
        <footer className="flex flex-col justify-center items-center">
          <p>Si no tienes una cuenta</p>
          <Link href={ROUTES.REGISTER} className="underline text-center">
            regístrate
          </Link>
        </footer>
      </section>
    </Layout>
  )
}
