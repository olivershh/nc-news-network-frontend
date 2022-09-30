import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArticleTopicBar({ selectedTopic }) {
  const [topics] = useState(["cooking", "coding", "football"]);

  return (
    <section role="search" className="filter-bar">
      <div className="filter-topics">
        {topics.map((topic) => {
          const isSelectedTopic = selectedTopic === topic;
          return (
            <Link
              key={topic}
              to={`/articles/${topic}`}
              className={
                isSelectedTopic ? "topic-bar-selected" : "topic-bar-option"
              }
            >
              {topic}
            </Link>
          );
        })}
      </div>
      <div className="filter-all">
        <Link
          key="all"
          to="/articles"
          className={
            !selectedTopic
              ? "topic-bar-selected-right topic-bar-selected"
              : "topic-bar-option-right"
          }
        >
          all
        </Link>
      </div>
    </section>
  );
}
