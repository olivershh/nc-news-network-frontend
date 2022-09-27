import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav-site-wide">
            <Link className="navbar-home-link" to="/">home</Link>
        </nav>
    )
}