import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ReadListContext } from "../../contexts/ReadListContext";

export default function ArticlePreview({ article }) {
  const { readList, setReadList } = useContext(ReadListContext);

  function inToRead() {
    return readList.toRead.some((readListArticle) => {
      return readListArticle.article_id === article.article_id;
    });
  }

  function handleClick() {
    setReadList((prevReadList) => {
      let newHaveRead = [...prevReadList["haveRead"]];
      let newToRead = [...prevReadList["toRead"]];

      if (inToRead()) {
        newToRead = newToRead.filter((prevArticle) => {
          return prevArticle.article_id !== article.article_id;
        });
      } else {
        newToRead = [article, ...newToRead];
      }

      return { toRead: newToRead, haveRead: newHaveRead };
    });
    // console.log(readList);
  }

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
        <button onClick={handleClick}>
          {inToRead() ? "remove" : "add to read"}
        </button>
      </div>
    </div>
  );
}
