import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticleFull from "../components/Article/ArticleFull";
import CommentsList from "../components/Comment/CommentList";
import CommentNew from "../components/Comment/CommentNew";
import ErrorBox from "../components/Generic/ErrorBox";

export default function SingleArticlePage() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isArticleError, setIsArticleError] = useState(false);
  const [errorOptions, setErrorOptions] = useState({});

  if (isArticleError) {
    return <ErrorBox errorOptions={errorOptions} />;
  }

  return (
    <div className="article-page">
      <ArticleFull
        article_id={article_id}
        setIsArticleError={setIsArticleError}
        setErrorOptions={setErrorOptions}
      />
      <CommentNew article_id={article_id} setComments={setComments} />
      <CommentsList
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />
    </div>
  );
}
