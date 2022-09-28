import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-menu">
      <Link className="homepage-big-link" to="/articles">
        ALL
      </Link>
      <Link className="homepage-big-link" to="/articles/cooking">
        🧑‍🍳 cooking
      </Link>
      <Link className="homepage-big-link" to="/articles/coding">
        💻 coding
      </Link>
      <Link className="homepage-big-link" to="/articles/football">
        ⚽ football
      </Link>
      <Link className="homepage-big-link" to="/articles">
        ALL
      </Link>
    </main>
  );
}
