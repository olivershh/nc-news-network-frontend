import CommentDelete from "./CommentDelete";

export default function CommentFull({ comment, isUserComment, setComments }) {
  const userProfile = (
    <div className="user">
      <img
        className={`small-user-img ${isUserComment && "small-user-img-owner"}`}
        src="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
      />
      <p>{comment.author}</p>
    </div>
  );

  return (
    <div className={isUserComment ? "comment-card-user" : `comment-card`}>
      {userProfile}
      <div
        className={`comment-opaque-bg ${
          isUserComment && "comment-opaque-bg-owner"
        }`}
      >
        <div className="comment-body">
          <p>{comment.body}</p>
        </div>
        <div className="comment-votes">
          <h2>♡ {comment.votes}</h2>
          {isUserComment && (
            <CommentDelete comment={comment} setComments={setComments} />
          )}
        </div>
      </div>
    </div>
  );
}
