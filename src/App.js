import {Routes, Route } from "react-router-dom";
import Pagina from "./components/Pagina"
import Post from "./components/Post"
import React, {useState, useEffect} from "react-router-dom"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Pagina />} />
        <Route path="/src/components/Post.js" element={<Post />} />
      </Routes>
  );
}

export default App;
