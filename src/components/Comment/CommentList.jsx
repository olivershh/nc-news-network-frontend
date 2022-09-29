import { useEffect, useState, useContext } from "react";
import { getCommentsByArticleID } from "../Generic/api-calls";
import CommentFull from "./CommentFull";
import Loading from "../Generic/Loading";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import ErrorBox from "../Generic/ErrorBox";
import { useLocation, useParams } from "react-router-dom";

export default function CommentsList({ article_id, setComments, comments }) {
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useContext(UserInfoContext);
  const [isCommentsError, setIsCommentsError] = useState(false);
  const [errorOptions, setErrorOptions] = useState({});
  const [forceReload, setForceReload] = useState(false);
  const currentLocation = useLocation(); //not working

  useEffect(() => {
    setForceReload(false);
    getCommentsByArticleID(article_id)
      .then(({ comments }) => {
        setIsLoading(false);
        setComments(comments);
      })
      .catch((err) => {
        setIsCommentsError(true);
        setErrorOptions({
          msg: "sorry, we couldn't load comments for this article",
          linkText: "try refreshing",
          linkRoute: currentLocation, //not working, but renders as if its just text
        });
      });
  }, []);

  if (isCommentsError) {
    return <ErrorBox errorOptions={errorOptions} />;
  }

  return (
    <Loading isLoading={isLoading}>
      {comments.map((comment) => {
        const isUserComment = comment.author === userInfo.username;
        return (
          <CommentFull
            key={comment.comment_id}
            comment={comment}
            setComments={setComments}
            isUserComment={isUserComment}
          />
        );
      })}
    </Loading>
  );
}
