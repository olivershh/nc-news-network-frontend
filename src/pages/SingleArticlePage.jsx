import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticleFull from "../components/Article/ArticleFull";
import ArticleTopicBar from "../components/Article/ArticleTopicBar";
import CommentsList from "../components/Comment/CommentList";
import CommentNew from "../components/Comment/CommentNew";
import ErrorBox from "../components/Generic/ErrorBox";

export default function SingleArticlePage() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isArticleError, setIsArticleError] = useState(false);
  const [errorOptions, setErrorOptions] = useState({});

  return (
    <main className="article-page">
      {/* <ArticleTopicBar /> */}
      {isArticleError ? (
        <ErrorBox errorOptions={errorOptions} />
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}

// if (isArticleError) {
//   return <ErrorBox errorOptions={errorOptions} />;
// }

// return (
//   <div className="article-page">
//     <ArticleTopicBar />
//     <ArticleFull
//       article_id={article_id}
//       setIsArticleError={setIsArticleError}
//       setErrorOptions={setErrorOptions}
//     />
//     <CommentNew article_id={article_id} setComments={setComments} />
//     <CommentsList
//       article_id={article_id}
//       setComments={setComments}
//       comments={comments}
//     />
//   </div>
// );
