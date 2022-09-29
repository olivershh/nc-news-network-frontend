import { useEffect, useState } from "react";
import { getArticle, increaseVotes } from "../Generic/api-calls";
import Loading from "../Generic/Loading";
import ArticleTopicBar from "./ArticleTopicBar";
import handleVoteClick from "./handleVote";

export default function ArticleFull({
  article_id,
  setIsArticleError,
  setErrorOptions,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [voteCounted, setVoteCounted] = useState(false);

  useEffect(() => {
    setIsArticleError(false);
    getArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        const responseMessage = err.response?.data?.msg;

        if (responseMessage === "article not found") {
          setErrorOptions({
            msg: "Sorry, we couldn't find that article",
          });
        }
        setIsArticleError(true);
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
