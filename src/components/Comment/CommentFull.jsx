import CommentDelete from "./CommentDelete";

export default function CommentFull({ comment, isUserComment, setComments }) {
  const userProfile = (
    <div className={isUserComment ? "owner" : `user`}>
      <img
        className={`small-user-img ${isUserComment && "small-user-img-owner"}`}
        src="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
      />
      <div className="user-stats">
        {isUserComment ? (
          <CommentDelete comment={comment} setComments={setComments} />
        ) : (
          <button className="vote-button-user">
            <i class="fa-solid fa-heart"></i>
          </button>
        )}

        <p>{comment.votes}</p>
      </div>
    </div>
  );

  return (
    <div className={isUserComment ? "comment-card-user" : `comment-card`}>
      <div
        className={`comment-bubble ${
          isUserComment && "comment-bubble comment-bubble-owner"
        }`}
      >
        {userProfile}
        <div className={"comment-body"}>
          <p>{comment.body}</p>
        </div>
        <div className="username-signature">{comment.author}</div>
      </div>
    </div>
  );
}

// {
//   isUserComment && (
//     <CommentDelete comment={comment} setComments={setComments} />
//   );
// }
