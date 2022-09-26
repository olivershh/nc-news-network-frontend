import Link from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav-site-wide">
            <Link href="/all">All</a>
             <Link href="/all">Random</a>
             <Link href="/all">Trending</a>
             <Link href="/all">Post</a>
        </nav>
    )
}