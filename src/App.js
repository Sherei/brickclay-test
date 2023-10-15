import Hero from "./components/hero/Hero"
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Faq from "./components/faq/Faq";
import Stats from "./components/stat/Stats";
import Footer from "./components/footer/Footer";
import "./App.css"
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  
  return <>
    <div style={{ overflow: "hidden" }}>
      <Hero />
      <Experience />
      <About />
      <Faq />
      <Testimonial/>
      <Stats />
      <Footer />
    </div>
  </>
}

export default App;
