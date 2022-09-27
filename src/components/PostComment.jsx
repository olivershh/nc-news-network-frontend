import { useState } from "react"
import { postCommentByID } from "./api-calls"

export default function PostComment({article_id, setComments}) {

    console.log(article_id)
    const [userComment, setUserComment] = useState("")

    const handleChange = (event) =>  {
        setUserComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (userComment === "") return
        setComments(prevComments => {
            return [{author: "grumpy19", body: userComment, votes: 0}, ...prevComments]
        })
        setUserComment("")
        postCommentByID(article_id, userComment)

        

    }

    return (


        <div className="new-comment">
            <div className="comment-form">
                <form onSubmit={handleSubmit}> 
                    <textarea name="userComment"
                            value={userComment}
                            onChange={e => handleChange(e)}>
                        Say something...
                    </textarea>
                    <button type="submit">Post!</button>
                </form>
            </div>

        </div>


    // <div className="new-comment">
    //         <div className="user">
    //             <img className="small-user-img" src="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg" />
    //             <p>{comment.author}</p>
    //         </ div>
    //         <div className="comment-opaque-bg" >
    //         <div className="comment-body">
    //             <p className="big-quotes">“</p>
    //             <p>{comment.body}</p>
    //             <p className="big-quotes">”</p>

    //         </div>
    //         <div className="comment-votes">
    //         <h2>♡ {comment.votes}</h2>
    //         </div>
    //         </div>
    //     </div>

)



}