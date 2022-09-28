import { useContext, useState } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { postCommentByID } from "../Generic/api-calls";

export default function CommentNew({ article_id, setComments }) {
  const [userComment, setUserComment] = useState("");
  const { userInfo } = useContext(UserInfoContext);

  const handleChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userComment === "") return;
    setComments((prevComments) => {
      return [
        {
          author: userInfo.username,
          body: userComment,
          votes: 0,
          comment_id: Date.now(),
        },
        ...prevComments,
      ];
    });
    setUserComment("");
    postCommentByID(article_id, userComment).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="new-comment">
      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Leave a comment.."
            name="userComment"
            value={userComment}
            onChange={(e) => handleChange(e)}
          >
            Say something...
          </textarea>
          <br />
          <button type="submit">Post!</button>
        </form>
      </div>
    </div>
  );
}
