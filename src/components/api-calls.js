import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-oliver.herokuapp.com/api",
});

export function getAllArticles() {
  return api.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
}
