export default function Layout({ children, center }) {
  const centerStyles = center ? 'flex justify-center items-center' : ''

  return (
    <main className={`bg-gray-900 min-h-screen w-full ${centerStyles}`}>
      {children}
    </main>
  )
}
