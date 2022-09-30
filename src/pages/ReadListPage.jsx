import { ReadListContext } from "../contexts/ReadListContext";
import { useContext, useEffect } from "react";
import ArticlePreview from "../components/Article/ArticlePreview";

export default function ReadListPage() {
  const { readList } = useContext(ReadListContext);

  useEffect(() => {}, [readList]);

  const toRead = (
    <div className="read-list-not-read">
      {readList.toRead.map((article) => {
        return <ArticlePreview article={article} key={article.article_id} />;
      })}
    </div>
  );

  const haveRead = (
    <div className="read-list-read">
      {readList.haveRead.map((article) => {
        return <ArticlePreview article={article} key={article.article_id} />;
      })}
    </div>
  );

  return (
    <main className="read-list-page">
      <div className="read-list-all">
        <div className="read-list-read">
          <h2>Ready to read</h2>
          {toRead}
        </div>
        <div className="read-list-read">
          <h2>Read history</h2>

          {haveRead}
        </div>
      </div>
    </main>
  );
}
