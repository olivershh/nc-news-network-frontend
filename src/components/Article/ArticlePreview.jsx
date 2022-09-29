// import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
// import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { ReadListContext } from "../../contexts/ReadListContext";
import AddRemoveReadList from "../Readlist/AddRemoveReadlist";

export default function ArticlePreview({ article }) {
  return (
    <div className="article-card-small">
      <Link
        to={`/articles/article/${article.article_id}`}
        state={{ partialArticle: article }}
      >
        <h2>
          {article.title}{" "}
          <span className="author-tag-inline">by {article.author}</span>
        </h2>
      </Link>
      <div className="article-card-small-stats">
        <p>♡ {article.votes}</p>
        <p>💬 {article.comment_count}</p>
        <AddRemoveReadList article={article} />
      </div>
    </div>
  );
}
