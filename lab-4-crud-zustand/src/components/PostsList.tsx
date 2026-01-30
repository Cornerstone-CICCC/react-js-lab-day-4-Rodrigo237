import { Link, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

export default function PostsList() {
  const navigate = useNavigate();

  const allPosts = usePostStore((s) => s.posts);
  const posts = allPosts.filter((p) => !p.isDeleted);

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button onClick={() => navigate("/posts/new")} className="px-3 py-2 bg-blue-600 text-white rounded">Create</button>
      </div>

      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.id} className="border p-3 rounded hover:bg-gray-50">
            <Link to={`/posts/${p.id}`}>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-600">{p.content.slice(0, 80)}...</p>
            </Link>
          </li>
        ))}
        {posts.length === 0 && <p>No posts yet.</p>}
      </ul>
    </div>
  );
}
