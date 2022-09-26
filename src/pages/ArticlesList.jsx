import { useEffect, useState } from "react"
import { getAllArticles } from "../components/api-calls"
import ArticleCardSmall from "../components/ArticleCardSmall"
import Loading from "../components/Loading"

export default function ArticlesList() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filters, setFilters] = useState({})


    useEffect(() => {
        getAllArticles().then(articles => {
            setArticles(articles)
            setIsLoading(false)
        })
      
    }, [])

    return (
        <Loading isLoading={isLoading} largeIcon={true}>
            <main className="articles-list-main">
        {articles.map(article => {
            return <ArticleCardSmall key={article.article_id} article={article}/>
        })}
        </main>
        </Loading>
    )
}