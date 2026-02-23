import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background layer */}
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950"></div>
      {/* Radial gradient overlay */}
      <div className="absolute top-0 z-20 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-30">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        < Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
