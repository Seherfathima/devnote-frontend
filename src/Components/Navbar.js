import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">DevNote</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/add" className="hover:text-gray-300 transition">Add Note</Link>
        <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
        <Link to="/register" className="hover:text-gray-300 transition">Register</Link>
      </div>
    </nav>
  );
}