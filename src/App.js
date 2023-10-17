import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Faq from "./components/faq/Faq";
import Stats from "./components/stat/Stats";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Service from "./components/service/Service";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react';
import Nointernet from "./components/Animations/Nointernet.json"
import "./App.css";

function App() {

  const [showTopButton, setShowTopButton] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);


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
      behavior: "smooth", 
    });
  };

  window.addEventListener("scroll", handleScroll);
  if (isOnline) {
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
          <ToastContainer />
        </div>

      </>
    );
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '50vh' }}>
      <div>
        <Lottie animationData={Nointernet} loop={true} />;
      </div>
      <button className='btn btn-primary' onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  );
}

export default App;
