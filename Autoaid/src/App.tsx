import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Header from "./Components/header";
import Footer from "./Components/footer";
import Home from "./pages/Home";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <div className="mt-24">
      <Home />
      </div>
      <Footer/>
    </>
  );
};

export default App;
