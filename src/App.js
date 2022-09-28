import "./App.css";
import Header from "./site-wide/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./site-wide/Footer";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import Home from "./pages/Home";
import { UserInfoContext } from "./contexts/UserInfoContext";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:topic" element={<ArticlesList />} />
          <Route path="/articles/article/:article_id" element={<Article />} />
        </Routes>
        <Footer />
      </div>
    </UserInfoContext.Provider>
  );
}

export default App;
