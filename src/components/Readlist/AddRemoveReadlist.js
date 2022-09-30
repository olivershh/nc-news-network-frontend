import { useContext } from "react";
import { ReadListContext } from "../../contexts/ReadListContext";

export default function AddRemoveReadList({ article }) {
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
  }

  return (
    <button
      className={
        inToRead()
          ? "article-preview-icon-faved icon-big"
          : "article-preview-icon icon-big test-case"
      }
      onClick={handleClick}
    >
      {<i className="fa-solid fa-bookmark"></i>}
    </button>
  );
}

{
  /* <button
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
</button>; */
}
