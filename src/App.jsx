import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Canvas3DSection from "./components/Canvas3DSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Projects />
      <div id="canvas3d-section">
        <Canvas3DSection />
        <div className="canvas3d-label">
          <div className="eyebrow">Skills &amp; Tools — drag to explore</div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
