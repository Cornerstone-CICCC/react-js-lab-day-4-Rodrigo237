import { Link } from "react-router-dom"

const Header = () => {
    return (
    <header className="border-b p-4 flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/trash">Trash</Link>
    </header>
    )
}
export default Header;