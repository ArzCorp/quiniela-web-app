import Layout from '@/components/Layout'
import { ROUTES } from '@/utils/constants'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const { push } = useRouter()

  useEffect(() => {
    push(ROUTES.LOGIN)
  }, [])

  return (
    <Layout center>
      <p className="animate-pulse">Cargando...</p>
    </Layout>
  )
}
