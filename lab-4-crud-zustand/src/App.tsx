import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PostsList from "./components/PostsList";
import PostDetail from "./components/PostDetail";
import PostNew from "./components/PostNew";
import PostEdit from "./components/PostEdit";
import Trash from "./components/Trash";

export default function App() {
  return (
    <BrowserRouter>
      <header className="p-4 border-b flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/trash">Trash</Link>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/edit" element={<PostEdit />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
