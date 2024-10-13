import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Article from './pages/Article';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default App;
