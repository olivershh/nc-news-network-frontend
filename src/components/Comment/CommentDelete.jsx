import { deleteCommentById } from "../Generic/api-calls";

export default function CommentDelete({ comment, setComments }) {
  const comment_id_current = comment.comment_id;
  function handleDelete() {
    setComments((prevComments) => {
      return [...prevComments].filter((comment) => {
        return comment.comment_id !== comment_id_current;
      });
    });
    deleteCommentById(comment_id_current).catch((err) => {
      console.log(err);
    });
  }

  return (
    <button className="vote-button-user" onClick={handleDelete}>
      <i class="fa-solid fa-trash"></i>
    </button>
  );
}
