import React from "react";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";
// import ThemeSwitch from "react-theme-switch-css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      home
      <Link to="/blog">Blog</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
