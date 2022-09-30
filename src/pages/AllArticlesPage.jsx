import { useEffect, useState } from "react";
import { getAllArticles } from "../components/Generic/api-calls";
import Loading from "../components/Generic/Loading";
import { useParams } from "react-router-dom";
import ArticlePreview from "../components/Article/ArticlePreview";
import ErrorBox from "../components/Generic/ErrorBox";
import ArticleFilterSettings from "../components/Article/ArticleFilterSettings";

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
        console.log(topic, "useeffect on topic change");
      })
      .catch((err) => {
        const responseMessage = err.response?.data?.msg;

        if (responseMessage === "topic not found") {
          setErrorOptions({
            msg: `Sorry, we don't have any articles about ${topic}`,
          });
        }
        setIsError(true);
      });
  }, [topic, sortBy, order]);

  if (isError) {
    return <ErrorBox errorOptions={errorOptions} />;
  }

  return (
    <>
      <Loading isLoading={isLoading} largeIcon={true}>
        <main className="article-list-page">
          <ArticleFilterSettings
            selectedTopic={topic}
            setSortBy={setSortBy}
            sortBy={sortBy}
            order={order}
            setOrder={setOrder}
          />
          <section className="articles-list-main">
            {articles.map((article) => {
              return (
                <ArticlePreview key={article.article_id} article={article} />
              );
            })}
          </section>
        </main>
      </Loading>
    </>
  );
}
