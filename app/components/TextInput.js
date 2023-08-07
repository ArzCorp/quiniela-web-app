export default function TextInput({ name, label, full, error, ...props }) {
  const widthStyles = full ? 'w-full' : `max-w-[300px]`
  const borderStyles = error
    ? 'focus:border-red-500 border-red-500'
    : 'focus:border-green-500'

  return (
    <label className="mb-1 flex flex-col" htmlFor={name}>
      <span className="mb-1 font-medium">{label}</span>
      <input
        className={`${widthStyles} ${borderStyles} px-2 py-1 text-gray-900 outline-none border-[3px] rounded-md transition-all duration-500`}
        type="text"
        id={name}
        name={name}
        {...props}
      />
      {error ? (
        <p className="mt-1 font-semibold text-red-500 text-xs">{error}</p>
      ) : null}
    </label>
  )
}
