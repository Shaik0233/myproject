import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./pages/Users";
import PostDetail from "./components/PostUserPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Import


const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
