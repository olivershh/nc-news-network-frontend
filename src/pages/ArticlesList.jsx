import { useEffect, useState } from "react"
import { getAllArticles } from "../components/api-calls"
import ArticleCardSmall from "../components/ArticleCardSmall"

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
        <main className="articles-list-main">
        {articles.map(article => {
            return <ArticleCardSmall article={article}/>
        })}
        </main>
    )
}