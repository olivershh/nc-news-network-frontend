import { useParams } from "react-router-dom"
import ArticleCardBig from "../components/ArticleCardBig"
import CommentsList from "../components/CommentList"

export default function Article() {

    const {article_id} = useParams()

    console.log(article_id)

    return (
        <div className="article-page">
        <ArticleCardBig article_id={article_id} />
        <CommentsList article_id={article_id}/>
        </div>
    )
}