import "./App.css";
import Header from "./site-wide/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./site-wide/Footer";
import ArticlesList from "./pages/ArticlesList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/all" element={<ArticlesList />} />
        <Route path="/all/:topic" element={<ArticlesList />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
