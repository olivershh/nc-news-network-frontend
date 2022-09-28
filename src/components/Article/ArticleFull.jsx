import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, increaseVotes } from "../Generic/api-calls";
import Loading from "../Generic/Loading";
import handleVoteClick from "./handleVote";

export default function ArticleFull({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [voteCounted, setVoteCounted] = useState(false);

  useEffect(() => {
    getArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("caught the error!");
      });
  }, []);

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
            onClick={() =>
              handleVoteClick(
                voteCounted,
                setArticle,
                setVoteCounted,
                article_id,
                increaseVotes
              )
            }
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
