import { useContext, useEffect, useState } from "react";
import { ReadListContext } from "../../contexts/ReadListContext";
import { getArticle, increaseVotes } from "../Generic/api-calls";
import Loading from "../Generic/Loading";
import handleVoteClick from "./handleVote";

export default function ArticleFull({
  article_id,
  setIsArticleError,
  setErrorOptions,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [voteCounted, setVoteCounted] = useState(false);
  const { setReadList } = useContext(ReadListContext);
  const [articleLoaded, setArticleLoaded] = useState(false);

  useEffect(() => {
    setIsArticleError(false);
    getArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
        setArticleLoaded(true);
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

  useEffect(() => {
    if (articleLoaded) {
      setReadList((prevReadList) => {
        let newHaveRead = [...prevReadList["haveRead"]];
        let newToRead = [...prevReadList["toRead"]];

        newToRead = newToRead.filter((prevArticle) => {
          return prevArticle.article_id !== parseInt(article_id);
        });

        newHaveRead = [...newHaveRead, article];

        return { toRead: newToRead, haveRead: newHaveRead };
      });
    }
  }, [articleLoaded]);

  return (
    <Loading isLoading={isLoading} largeIcon={true}>
      <article className="article-card-big">
        <div className="article-card-header">
          <h2>{article.title}</h2>
          <h3>
            <em>by {article.author}</em>
          </h3>
        </div>
        <p className="article-card-big-body">{article.body}</p>
        <div className="article-card-big-stats">
          <div className="votes">
            <button
              className={voteCounted ? "vote-button-red" : "vote-button"}
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
              <i class="fa-solid fa-heart"></i>
            </button>
            <p>{article.votes}</p>
          </div>
          <div className="votes">
            <button className="comment-button">
              <i class="fa-solid fa-comment"></i>
            </button>
            <p>{article.comment_count}</p>
          </div>

          {/* <div className="comments">
            <p>
              {article.comment_count}
              <br /> comments
            </p>
          </div> */}
        </div>
      </article>
    </Loading>
  );
}
