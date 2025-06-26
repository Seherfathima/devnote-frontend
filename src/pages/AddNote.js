import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/notes`
        , { title, content });
      navigate("/");
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Add New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}