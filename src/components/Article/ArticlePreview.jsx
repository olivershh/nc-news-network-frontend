import { Link } from "react-router-dom";

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
      </div>
    </div>
  );
}
