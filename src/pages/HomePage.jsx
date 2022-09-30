import { useContext } from "react";
import { Link } from "react-router-dom";
import TypeWriter from "../components/Generic/Typewriter";

import { UserInfoContext } from "../contexts/UserInfoContext";

export default function Home() {
  const { userInfo } = useContext(UserInfoContext);

  return (
    <main className="home-page">
      <TypeWriter
        string={`${"‎".repeat(20)}Welcome, ${userInfo.username}.`}
        speed="50"
        tag="h2"
      />
      <Link className="homepage-big-link" to="/articles">
        ALL
      </Link>
      <Link className="homepage-big-link big-cooking" to="/articles/cooking">
        🧑‍🍳 cooking
      </Link>
      <Link className="homepage-big-link big-coding" to="/articles/coding">
        💻 coding
      </Link>
      <Link className="homepage-big-link big-football" to="/articles/football">
        ⚽ football
      </Link>
    </main>
  );
}
