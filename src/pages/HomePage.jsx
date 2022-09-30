import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TypeWriter from "../components/Generic/Typewriter";

import { UserInfoContext } from "../contexts/UserInfoContext";

export default function Home() {
  const [showReadlistButton, setShowReadlistButton] = useState(false);

  setTimeout(() => {
    setShowReadlistButton(true);
  }, 3000);

  return (
    <main className="home-page">
      <section className="home-intro"></section>
      <section className="nav-options">
        <p className="readlist-intro-p">{`Explore by topic?`}</p>
        <Link className="homepage-big-link" to="/articles">
          ALL
        </Link>
        <Link className="homepage-big-link big-cooking" to="/articles/cooking">
          cooking
        </Link>
        <Link className="homepage-big-link big-coding" to="/articles/coding">
          coding
        </Link>
        <Link
          className="homepage-big-link big-football"
          to="/articles/football"
        >
          football
        </Link>
        <TypeWriter
          string={`${"‎".repeat(20)} Or get back to your readlist?`}
          speed="40"
          tag="h2"
        />

        {showReadlistButton && (
          <Link className="homepage-big-link my-readlist-link" to="/readlist">
            Go to my readlist..
          </Link>
        )}
      </section>
    </main>
  );
}
