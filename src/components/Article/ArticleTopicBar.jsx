import { useState } from "react";
import { Link } from "react-router-dom";

export default function ArticleTopicBar({ selectedTopic }) {
  const [topics, setTopics] = useState(["cooking", "coding", "football"]);

  return (
    <div className="topic-bar">
      {topics.map((topic) => {
        const isSelectedTopic = selectedTopic === topic;
        return (
          <Link
            key={topic}
            to={`/articles/${topic}`}
            className={isSelectedTopic ? "topic-bar-selected" : undefined}
          >
            {topic}
          </Link>
        );
      })}

      <Link
        key="all"
        to="/articles"
        className={selectedTopic ?? "topic-bar-selected-all"}
      >
        all
      </Link>
    </div>
  );
}
