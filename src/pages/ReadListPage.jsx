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
      <section className="readlist-intro">
        <h2>My read list</h2>
        <p>
          Hit the bookmark button on articles to add or remove from your
          readlist. Viewed articles will be removed automatically.
        </p>
      </section>
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
