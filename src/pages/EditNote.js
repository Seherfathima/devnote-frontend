import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = "https://devnote-backend-3.onrender.com";

export default function EditNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const res = await axios.get(${API_BASE_URL}/notes/${id});
      setTitle(res.data.title);
      setContent(res.data.content);
    } catch (err) {
      console.error("Error fetching note:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(${API_BASE_URL}/notes/${id}, { title, content });
      navigate("/");
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl space-y-6 mt-10">
      <h2 className="text-2xl font-bold">Edit Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
      />
      <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transition">
        Update Note
      </button>
    </form>
  );
}
