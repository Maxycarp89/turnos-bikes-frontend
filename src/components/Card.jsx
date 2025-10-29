export default function Card({ children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-80 text-center">
      {children}
    </div>
  );
}
