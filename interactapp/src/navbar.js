import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className = "nav">
        <Link to="/" className="site-title">Interact Transilvania</Link>
        <ul>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
        </ul>
    </nav>
}