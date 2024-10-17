import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
// import Article from "./pages/Article";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Services from "./pages/Service";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <div className="mt-24">
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;
