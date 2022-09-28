import { useEffect, useState } from "react"
import { getCommentsByArticleID } from "./api-calls"
import CommentCard from "./CommentCard"
import Loading from "./Loading"

export default function CommentsList({article_id, setComments, comments}) {


const [isLoading, setIsLoading] = useState(true)


useEffect(() => {

    getCommentsByArticleID(article_id).then(({comments}) => {
        setIsLoading(false)
        setComments(comments)
    })

}, [])

    return <Loading isLoading={isLoading}>
        {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment}/>
        })}
    </Loading>
}