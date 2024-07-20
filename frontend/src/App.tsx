import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Body />
      <MainBody />
      <Footer />
    </>
  );
}

export default App;
