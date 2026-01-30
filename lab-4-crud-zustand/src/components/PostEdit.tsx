import { useParams, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import { useState, useEffect } from "react";

export default function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = usePostStore((s) => s.posts);
  const updatePost = usePostStore((s) => s.updatePost);
  const post = posts.find((p) => p.id === id);
  const [title, setTitle] = useState(post?.title ?? "");
  const [content, setContent] = useState(post?.content ?? "");

  useEffect(() => {
    if (!post) navigate("/posts");
  }, [post, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    updatePost(id, title, content);
    navigate(`/posts/${id}`);
  };
  if (!post) return null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <input className="border p-2 w-full rounded" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      <textarea className="border p-2 w-full rounded h-40" value={content} onChange={(e) => setContent(e.target.value)} required/>
      <button className="px-3 py-2 bg-blue-600 text-white rounded">Save</button>
    </form>
  );
}
