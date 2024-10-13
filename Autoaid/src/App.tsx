import { Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <div className="mt-24">
      <Home />
      </div>
      <Footer/>
    </>
  );
}

export default App;