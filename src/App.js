import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/header/home/Home";
import About from "./components/header/about/About";
import Skills from "./components/header/skills/Skills";


const App = () => {
  return (
    <>
    
    <Header />
    <main className="main">
      <Home/>

      <About/>
      <Skills/>
      
    </main>

    </>
  )
}
export default App;