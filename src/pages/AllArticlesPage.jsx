import { useEffect, useState } from "react";
import { getAllArticles, getTopics } from "../components/Generic/api-calls";
import Loading from "../components/Generic/Loading";
import { useParams } from "react-router-dom";
import ErrorBoxSmall from "../components/Generic/ErrorBoxSmall";
import ArticlePreview from "../components/Article/ArticlePreview";
import ArticleSortBar from "../components/Article/ArticleSortBar";
import ArticleTopicBar from "../components/Article/ArticleTopicBar";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  let { topic } = useParams();
  const [isError, setIsError] = useState(false);
  const [errorOptions, setErrorOptions] = useState({});
  const [sortBy, setSortBy] = useState(undefined);
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    setIsError(false);

    const searchParams = { params: { topic, sort_by: sortBy, order } };

    getAllArticles(searchParams)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        const responseMessage = err.response?.data?.msg;

        if (responseMessage === "topic not found") {
          setErrorOptions({
            msg: `Sorry, we don't have any articles about ${topic}`,
            linkText: "Head back to all articles",
            linkRoute: "/articles",
          });

          setIsError(true);
        }
      });
  }, [topic, sortBy, order]);

  if (isError) {
    return <ErrorBoxSmall errorOptions={errorOptions} />;
  }

  return (
    <>
      <Loading isLoading={isLoading} largeIcon={true}>
        <ArticleTopicBar selectedTopic={topic} />
        <ArticleSortBar
          setSortBy={setSortBy}
          sortBy={sortBy}
          order={order}
          setOrder={setOrder}
        />
        <main className="articles-list-main">
          {articles.map((article) => {
            return (
              <ArticlePreview key={article.article_id} article={article} />
            );
          })}
        </main>
      </Loading>
    </>
  );
}
