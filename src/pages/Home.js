import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/notes`);
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div className="p-6">

      {/* Centered Add Note Button */}
      <div className="max-w-lg mx-auto mt-8 mb-12 p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-center">
        <Link
          to="/add"
          className="text-2xl font-bold bg-white text-blue-600 px-6 py-3 rounded-xl shadow hover:scale-105 hover:bg-gray-100 transition"
        >
          + Add Note
        </Link>
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-center">All Notes</h2>
      
      {notes.length === 0 ? (
        <p className="text-gray-200 text-center">No notes yet.</p>
      ) : (
        <ul className="space-y-6 max-w-2xl mx-auto">
          {notes.map((note) => (
            <li key={note.id} className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-xl hover:scale-105 transition transform">
              <h3 className="font-bold text-xl mb-2">{note.title}</h3>
              <p className="text-gray-200">{note.content}</p>
              <div className="mt-4 space-x-4">
                <Link to={`/edit/${note.id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition">
                  Edit
                </Link>
                <button onClick={() => deleteNote(note.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}