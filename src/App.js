import React, { useState } from "react";
import "./App.css";
import { FaArrowUp } from "react-icons/fa";

import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Faq from "./components/faq/Faq";
import Stats from "./components/stat/Stats";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Service from "./components/service/Service";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Scroll behavior animation
    });
  };

  // Add a scroll event listener to check when to show the button
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {showTopButton && (
          <button className="btn top_btn" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
        <Hero />
        <Experience />
        <About />
        <Faq />
        <Testimonial />
        <Stats />
        <Service />
        <Footer />
      </div>
    </>
  );
}

export default App;
