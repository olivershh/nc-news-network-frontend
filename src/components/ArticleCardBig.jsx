import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle, increaseVotes } from "./api-calls"
import Loading from "./Loading"

export default function ArticleCardBig({article_id}) {

const [isLoading, setIsLoading] = useState(true)

const [article, setArticle] = useState({})  
const [voteCounted, setVoteCounted] = useState(false)


useEffect(() => {

    getArticle(article_id).then(({article}) => {
        setArticle(article)
        setIsLoading(false)
    }
    )

}, [])

function handleVoteClick() {

    if (!voteCounted)
    {

    setArticle((prevArticle) => {
        setVoteCounted(true)
        return {...prevArticle, votes: prevArticle.votes + 1}
    })
    increaseVotes(article_id)
    .catch((err) => {
        setVoteCounted(false)
        setArticle((prevArticle) => {
            return {...prevArticle, votes: prevArticle.votes - 1}
        })
    })
}
}

    return (
    
        <Loading isLoading={isLoading} largeIcon={true}>
    <div className="article-card-big">
        
        <h2 className="article-card-big-header">{article.title} <em>by {article.author}</em></h2>
        <div className="article-card-big-stats">
            <button className={voteCounted ? "article-card-big-button-voted" : "article-card-big-button"}  onClick={handleVoteClick}><p>♡ {article.votes}</p></button>
            <button className="article-card-big-button"><p>💬 {article.comment_count}</p></button>
        </div>
        <p className="article-card-big-body">{article.body}</p>
        
    </div>
    </Loading>
    )
}