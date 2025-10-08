export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 ${className || ""}`}
    />
  );
}
