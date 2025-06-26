import Login from "./pages/login";
import Register from "./pages/Register";
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </div>
  );
}