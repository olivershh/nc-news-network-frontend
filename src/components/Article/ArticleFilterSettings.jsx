import { useEffect } from "react";
import ArticleSortBar from "./ArticleSortBar";
import ArticleTopicBar from "./ArticleTopicBar";

export default function ArticleFilterSettings({
  selectedTopic,
  setSortBy,
  sortBy,
  order,
  setOrder,
}) {
  useEffect(() => {
    console.log(selectedTopic, "useeffect on topic change in artfiltsettings");
  });
  return (
    <div className="article-filter-settings">
      <ArticleTopicBar selectedTopic={selectedTopic} />
      <ArticleSortBar
        selectedTopic={selectedTopic}
        setSortBy={setSortBy}
        sortBy={sortBy}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
}
