import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./Student";
import CreateStudent from "./CreateStudent";
import "./App.css";
import UpdateStudent from "./UpdateStudent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Student />}></Route>
          <Route path="/create" element={<CreateStudent />}></Route>
          <Route path="/update/:userID" element={<UpdateStudent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
