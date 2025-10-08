export function Card({ children, className }) {
  return (
    <div className={`rounded-xl border p-4 shadow-sm bg-white ${className || ""}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="font-bold mb-2">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-gray-600">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-4">{children}</div>;
}
