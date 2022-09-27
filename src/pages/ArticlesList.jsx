import { useEffect, useState } from "react"
import { getAllArticles, getTopics } from "../components/api-calls"
import ArticleCardSmall from "../components/ArticleCardSmall"
import Loading from "../components/Loading"
import TopicBar from "../components/TopicBar"
import { useParams } from "react-router-dom"
import ErrorBoxSmall from "../components/ErrorBoxSmall"

export default function ArticlesList() {

    const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    let {topic} = useParams()
    const [isError, setIsError] = useState(false)
    const [errorOptions, setErrorOptions] = useState({})


    useEffect(() => {

        console.log("in useeffect all")
        setIsError(false)

        
        const searchParams = {params: {topic}}
        // const apiCalls = [getAllArticles(searchParams)]


        getAllArticles(searchParams).then(({articles}) => {
            setArticles(articles)
            // setTopics(topics)
            setIsLoading(false)
        })
        .catch(err => {
            const responseMessage = err.response?.data?.msg

            console.log(err)

            if (responseMessage === "topic not found") {
            setErrorOptions(
                {msg: `Sorry, we don't have any articles about ${topic}`,
                linkText: "Head back to /ALL",
                linkRoute: "/all"}
            )

            setIsError(true)
        }
        })
    
}, [topic])

if (isError)  {
    return <ErrorBoxSmall errorOptions={errorOptions} />
}
        

    return (
        <>
        
        <Loading isLoading={isLoading} largeIcon={true}>
        <TopicBar selectedTopic={topic}/>
            <main className="articles-list-main">
        {articles.map(article => {
            return <ArticleCardSmall key={article.article_id} article={article}/>
        })}
        </main>
        </Loading>
        </>
    )
}