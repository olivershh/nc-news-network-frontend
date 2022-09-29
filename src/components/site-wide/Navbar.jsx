import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link key="articles" to="/articles">
        articles
      </Link>
      <Link key="home" to="/">
        home
      </Link>
      <Link key="readlist" to="/readlist">
        readlist
      </Link>
    </nav>
  );
}
