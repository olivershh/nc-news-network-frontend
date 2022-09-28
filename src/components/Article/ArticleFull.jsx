import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, increaseVotes } from "../Generic/api-calls";
import Loading from "../Generic/Loading";

export default function ArticleFull({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);

  const [article, setArticle] = useState({});
  const [voteCounted, setVoteCounted] = useState(false);

  useEffect(() => {
    getArticle(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  function handleVoteClick() {
    if (!voteCounted) {
      setArticle((prevArticle) => {
        setVoteCounted(true);
        return { ...prevArticle, votes: prevArticle.votes + 1 };
      });
      increaseVotes(article_id).catch((err) => {
        setVoteCounted(false);
        setArticle((prevArticle) => {
          return { ...prevArticle, votes: prevArticle.votes - 1 };
        });
      });
    }
  }

  return (
    <Loading isLoading={isLoading} largeIcon={true}>
      <div className="article-card-big">
        <h2 className="article-card-big-header">
          {article.title} <em>by {article.author}</em>
        </h2>
        <p className="article-card-big-body">{article.body}</p>
        <div className="article-card-big-stats">
          <button
            className={
              voteCounted
                ? "article-card-big-button-voted"
                : "article-card-big-button"
            }
            onClick={handleVoteClick}
          >
            {article.votes}
            <br /> LIKES
          </button>
          <p>
            {article.comment_count}
            <br /> comments
          </p>
        </div>
      </div>
    </Loading>
  );
}
