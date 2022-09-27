import "./App.css";
import Header from "./site-wide/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./site-wide/Footer";
import ArticlesList from "./pages/ArticlesList";
import ArticleCardBig from "./components/ArticleCardBig";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:topic" element={<ArticlesList />} />
        <Route
          path="/articles/article/:article_id"
          element={<ArticleCardBig />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
