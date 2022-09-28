import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticleFull from "../components/Article/ArticleFull";
import CommentsList from "../components/Comment/CommentList";
import CommentNew from "../components/Comment/CommentNew";

export default function SingleArticlePage() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  return (
    <div className="article-page">
      <ArticleFull article_id={article_id} />
      <CommentNew article_id={article_id} setComments={setComments} />
      <CommentsList
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />
    </div>
  );
}
