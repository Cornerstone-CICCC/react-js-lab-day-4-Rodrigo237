import { usePostStore } from "../stores/post.store";
import { toast, Toaster } from "react-hot-toast";

export default function Trash() {
  const posts = usePostStore((s) => s.posts).filter((p) => p.isDeleted);

  const recoverPost = usePostStore((s) => s.recoverPost);
  const deletePermanently = usePostStore((s) => s.deletePermanently);

  return (
    <div className="space-y-4">
      <Toaster />

      <h1 className="text-2xl font-bold">Trash</h1>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-600">{p.content.slice(0, 80)}...</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { recoverPost(p.id);
              toast.success("Recovered");
                }} className="px-3 py-1 bg-green-600 text-white rounded">Recover
              </button>
              <button onClick={() => { deletePermanently(p.id);
                  toast.success("Deleted permanently");
                }} className="px-3 py-1 bg-red-700 text-white rounded">
                Delete permanently
              </button>
            </div>
          </li>
        ))}

        {posts.length === 0 && <p>No deleted posts.</p>}
      </ul>
    </div>
  );
}
