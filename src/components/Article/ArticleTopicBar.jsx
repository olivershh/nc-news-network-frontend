import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../Generic/api-calls";

export default function ArticleTopicBar({ selectedTopic }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div className="topic-bar">
      <div className="nav-topics">
        {topics.map((topic) => {
          const isSelectedTopic = selectedTopic === topic.slug;
          return (
            <Link
              key={topic.slug}
              to={`/articles/${topic.slug}`}
              className={isSelectedTopic ? "topic-bar-selected" : undefined}
            >
              {topic.slug}
            </Link>
          );
        })}
      </div>
      <div className="nav-other">
        <Link
          key="all"
          to="/articles"
          className={selectedTopic ?? "topic-bar-selected-all"}
        >
          all
        </Link>
        <Link key="home" to="/">
          HOME
        </Link>
      </div>
    </div>
  );
}
