import { deleteCommentById } from "./api-calls"

export default function CommentCard({comment, isUserComment, setComments}) {

    function handleDelete() {
        const comment_id_current = comment.comment_id
        setComments(prevComments => {
            return [...prevComments].filter(comment => {
                return comment.comment_id !== comment_id_current
            })
        })
        deleteCommentById(comment_id_current)
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div className={`comment-card ${isUserComment && "comment-card-owner"}`} >
            <div className="user">
                <img className="small-user-img" src="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg" />
                <p>{comment.author}</p>
            </ div>
            <div className="comment-opaque-bg" >
            <div className="comment-body">
                <p className="big-quotes">“</p>
                <p>{comment.body}</p>
                <p className="big-quotes">”</p>

            </div>
            <div className="comment-votes">
            <h2>♡ {comment.votes}</h2>
            {isUserComment && <button onClick={handleDelete}>🗑️</button>}
            </div>
            </div>
        </div>
    )
}