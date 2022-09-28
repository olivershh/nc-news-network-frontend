export default function CommentCard({comment}) {
    return(
        <div className="comment-card">
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
            </div>
            </div>
        </div>
    )
}