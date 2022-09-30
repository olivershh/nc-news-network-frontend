import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-icons">
      <Link key="articles" to="/articles" title="articles">
        <i class="nav-icon fa-solid fa-list"></i>
      </Link>
      <Link key="home" to="/" title="home">
        <i class="nav-icon fa-solid fa-house"></i>
      </Link>
      <Link key="readlist" to="/readlist" title="read later list">
        <i class="nav-icon fa-solid fa-bookmark"></i>
      </Link>
    </nav>
  );
}
