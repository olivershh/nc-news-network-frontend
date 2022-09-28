import "./App.css";
import Header from "./components/site-wide/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/site-wide/Footer";
import AllArticlesPage from "./pages/AllArticlesPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import HomePage from "./pages/HomePage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<AllArticlesPage />} />
          <Route path="/articles/:topic" element={<AllArticlesPage />} />
          <Route
            path="/articles/article/:article_id"
            element={<SingleArticlePage />}
          />
        </Routes>
        <Footer />
      </div>
    </UserInfoContext.Provider>
  );
}

export default App;
