import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav-site-wide">
            <Link href="/all">ALL</Link>
             <Link href="/all">random</Link>
             <Link href="/all">trending</Link>
        </nav>
    )
}