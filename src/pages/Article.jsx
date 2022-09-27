import { useState } from "react"
import { useParams } from "react-router-dom"
import ArticleCardBig from "../components/ArticleCardBig"
import CommentsList from "../components/CommentList"
import PostComment from "../components/PostComment"

export default function Article() {

    const [comments, setComments] = useState([])
    const {article_id} = useParams()

    console.log(article_id)

    return (
        <div className="article-page">
        <ArticleCardBig article_id={article_id} />
        <PostComment article_id={article_id} setComments={setComments}/>
        <CommentsList article_id={article_id} setComments={setComments} comments={comments}/>
        </div>
    )
}