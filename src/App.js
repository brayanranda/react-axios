import * as React from "react";
import Home from "./page/Home";
import List from "./page/List";
import Create from "./page/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}
