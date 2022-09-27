import axios from "axios";
import { isCompositeComponent } from "react-dom/test-utils";

const api = axios.create({
  baseURL: "https://nc-news-api-oliver.herokuapp.com/api",
  // timeout: 15000,
});

export function getAllArticles(params) {
  return api.get("/articles", params).then(({ data }) => {
    return data;
  });
}

export function getTopics() {
  return api.get("/topics").then(({ data }) => {
    return data;
  });
}

export function getArticle(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

export function increaseVotes(article_id) {
  const voteUpdate = { inc_votes: 1 };

  return api
    .patch(`/articles/${article_id}`, voteUpdate, {
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    .then(({ data }) => {});
}
