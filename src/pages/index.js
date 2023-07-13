import Image from 'next/image'
import { Inter } from 'next/font/google'
import { API_URL } from '@/utils/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Modo Oscuro</h1>
        <picture>
          <img
            className="w-[500px]"
            src="https://i.ibb.co/KhyrFpG/chivas-guadalajara.webp"
            alt=""
          />
        </picture>
        <p className="text-gray-300">
          Este es un ejemplo de texto en modo oscuro.
        </p>
        <button className="bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded">
          Botón
        </button>
      </div>
    </main>
  )
}
