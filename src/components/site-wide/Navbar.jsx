import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav-site-wide">
            <Link href="/all">All</Link>
             <Link href="/all">Random</Link>
             <Link href="/all">Trending</Link>
             <Link href="/all">Post</Link>
        </nav>
    )
}