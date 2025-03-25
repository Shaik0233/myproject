import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./pages/Users";
import PostDetail from "./pages/PostUserPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/navbar/Navbar";

const App = () => {
  return (
    <Router>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        {/* Dynamic route */}
      </Routes>
    </Router>
  );
};

export default App;
