import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-oliver.herokuapp.com/api",
  timeout: 7000,
});

export function getAllArticles(params) {
  return api.get("/articles", params).then(({ data }) => {
    console.log(data, "in articles api call");
    return data;
  });
}

export function getTopics() {
  return api.get("/topics").then(({ data }) => {
    return data;
  });
}
