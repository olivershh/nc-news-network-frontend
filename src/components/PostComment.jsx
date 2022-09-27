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
        if (userComment === "")
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




)



}