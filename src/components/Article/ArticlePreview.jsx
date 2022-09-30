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
        <h2 className="article-preview-title">
          {article.title}{" "}
          <span className="author-tag-inline">by {article.author}</span>
        </h2>
      </Link>
      <div className="article-card-small-controls">
        <div className="article-card-small-stats">
          <div className="likes-article-preview">
            <p>{article.votes}</p>
            <i class="fa-solid fa-heart article-preview-icon"></i>
          </div>
          <div className="comments-article-preview">
            <p>{article.comment_count}</p>
            <i class="fa-solid fa-comment article-preview-icon"></i>
          </div>
        </div>
        <AddRemoveReadList article={article} />
      </div>
    </div>
  );
}
