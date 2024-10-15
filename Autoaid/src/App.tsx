import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
// import Article from "./pages/Article";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Home from "./pages/Home";
import Services from "./pages/services";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <div className="mt-24">
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;
