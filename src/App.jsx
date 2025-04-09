import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div>
      <CursorFollower />
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;
