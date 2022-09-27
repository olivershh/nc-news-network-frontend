import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "./api-calls"
import Loading from "./Loading"

export default function ArticleCardBig(props) {

const [isLoading, setIsLoading] = useState(true)
const {article_id} = useParams()
const [article, setArticle] = useState({})  


useEffect(() => {
    getArticle(article_id).then(({article}) => {
        setArticle(article)
        setIsLoading(false)
    }
    )
}, [])


    return (
    
        <Loading isLoading={isLoading} largeIcon={true}>
    <div className="article-card-big">
        
        <h2 className="article-card-big-header">{article.title} <em>by {article.author}</em></h2>
        <div className="article-card-big-stats">
            <p>♡ {article.votes}</p>
            <p>💬 {article.comment_count}</p>
        </div>
        <p className="article-card-big-body">{article.body}</p>
        
    </div>
    </Loading>
    )
}