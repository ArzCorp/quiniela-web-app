export default function TextInput({ label, type = 'text', ...props }) {
  return (
    <input
      placeholder={label}
      className="text-gray-900 placeholder:text-gray-600 py-1 px-3 rounded-lg w-full"
      type={type}
      {...props}
    />
  )
}
