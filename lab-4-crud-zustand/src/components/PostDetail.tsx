import { useParams, Link, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import { toast, Toaster } from "react-hot-toast";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = usePostStore((s) => s.posts);
  const softDeletePost = usePostStore((s) => s.softDeletePost);
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Post not found.</p>;

  const handleDelete = () => {
    softDeletePost(post.id);
    toast.success("Post moved to trash");
    navigate("/posts");
  };

  return (
    <div className="space-y-4">
      <Toaster />
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <div className="flex gap-3">
        <Link to={`/posts/${post.id}/edit`} className="px-3 py-2 bg-yellow-500 text-white rounded">Edit</Link>
        <button onClick={handleDelete} className="px-3 py-2 bg-red-600 text-white rounded">Delete</button>
      </div>
    </div>
  );
}
