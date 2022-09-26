import "./App.css";
import Header from "./components/site-wide/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/site-wide/Footer";
import ArticlesList from "./pages/ArticlesList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Hub/>} */}
        {/* <Route path="/random" element=??? */}

        <Route path="/all" element={<ArticlesList />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
