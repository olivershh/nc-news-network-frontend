import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav-site-wide">
            <Link to="/all">ALL</Link>
             <Link to="/all">random</Link>
             <Link to="/all">trending</Link>
        </nav>
    )
}