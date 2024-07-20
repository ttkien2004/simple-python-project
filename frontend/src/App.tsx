import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainBody from "./components/MainBody";

function App() {
  return (
    <>
      <Header />
      <Body />
      <MainBody />
    </>
  );
}

export default App;
