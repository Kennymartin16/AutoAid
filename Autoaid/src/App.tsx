import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const footerRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHeaderVisible(false);
        } else {
          setHeaderVisible(true); // Show header when footer is not in view
        }
      },
      { threshold: 0.9 } 
    );

    const currentFooterRef = footerRef.current;

    if (currentFooterRef) {
        footerObserver.observe(currentFooterRef);
     }

     return () => {
           if (currentFooterRef) {
            footerObserver.unobserve(currentFooterRef);
         }
    };
  }, []);

  return (
    <>
      <Header isVisible={headerVisible} />
      <div className="mt-24">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      </div>
      <footer ref={footerRef}>
        <Footer/>
      </footer>
    </>
  );
};


export default App;
