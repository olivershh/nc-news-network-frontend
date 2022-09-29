import { ReadListContext } from "../contexts/ReadListContext";
import { useState, useContext } from "react";
import ArticlePreview from "../components/Article/ArticlePreview";
import ArticleTopicBar from "../components/Article/ArticleTopicBar";

export default function ReadListPage() {
  const { readList } = useContext(ReadListContext);

  const toRead = (
    <div className="read-list-not-read">
      <h2>To read...</h2>
      {readList.toRead.map((article) => {
        return <ArticlePreview article={article} />;
      })}
    </div>
  );

  const haveRead = (
    <div className="read-list-read">
      <h2>Read history</h2>
      {readList.haveRead.map((article) => {
        return <ArticlePreview article={article} />;
      })}
    </div>
  );

  return (
    <div className="read-list-page">
      <ArticleTopicBar />
      <div className="read-list-all">
        {toRead}
        {haveRead}
      </div>
    </div>
  );
}
