import { useEffect, useState, useContext } from "react";
import { getCommentsByArticleID } from "../Generic/api-calls";
import CommentFull from "./CommentFull";
import Loading from "../Generic/Loading";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export default function CommentsList({ article_id, setComments, comments }) {
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useContext(UserInfoContext);

  useEffect(() => {
    getCommentsByArticleID(article_id).then(({ comments }) => {
      setIsLoading(false);
      setComments(comments);
    });
  }, []);

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
