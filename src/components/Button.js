export default function Button({ children, loading, className, ...props }) {
  const loadingStyles = loading ? 'animate-pulse' : ''
  return (
    <button
      className={`${loadingStyles} ${className} bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded`}
      {...props}
    >
      {children}
    </button>
  )
}
