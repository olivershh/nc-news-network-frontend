import "./App.css";
import Header from "./components/site-wide/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/site-wide/Footer";
import AllArticlesPage from "./pages/AllArticlesPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import HomePage from "./pages/HomePage";
import { defaultUserInfo, UserInfoContext } from "./contexts/UserInfoContext";
import { useState } from "react";
import PageNotFound from "./pages/PageNotFound";
import { defaultReadList, ReadListContext } from "./contexts/ReadListContext";
import ReadListPage from "./pages/ReadListPage";

function App() {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const [readList, setReadList] = useState(defaultReadList);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <ReadListContext.Provider value={{ readList, setReadList }}>
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
            <Route path="/readlist" element={<ReadListPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </ReadListContext.Provider>
    </UserInfoContext.Provider>
  );
}

export default App;
