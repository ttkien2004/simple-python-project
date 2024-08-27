import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookForm from "./pages/BookInfo";
import Navbar from "./components/Navbar";
import BookUpdate from "./pages/BookUpdate";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AddNewBook" element={<BookForm />}></Route>
        <Route path="/UpdateBook/:id" element={<BookUpdate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
