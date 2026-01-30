import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

export default function PostNew() {
  const addPost = usePostStore((s) => s.addPost);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(title, content);
    navigate("/posts");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-bold">Add Post</h1>
      <input className="border p-2 w-full rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      <textarea className="border p-2 w-full rounded h-40" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required/>
      <button className="px-3 py-2 bg-blue-600 text-white rounded">Create</button>
    </form>
  );
}
