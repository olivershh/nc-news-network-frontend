import ArticleSortBar from "./ArticleSortBar";
import ArticleTopicBar from "./ArticleTopicBar";

export default function ArticleFilterSettings({
  topic,
  setSortBy,
  sortBy,
  order,
  setOrder,
}) {
  return (
    <div className="article-filter-settings">
      <ArticleTopicBar selectedTopic={topic} />
      <ArticleSortBar
        selectedTopic={topic}
        setSortBy={setSortBy}
        sortBy={sortBy}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
}
