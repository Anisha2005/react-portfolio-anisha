import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      className="
      min-h-screen 
      overflow-x-hidden 
      transition-all 
      duration-500
      
      bg-gradient-to-br 
      from-purple-100 
      via-white 
      to-pink-100
      
      dark:from-neutral-950 
      dark:via-neutral-950 
      dark:to-black
      
      text-neutral-900
      dark:text-neutral-300
      antialiased
      "
    >
      <ScrollProgress />

      {/* Soft Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-300 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-300 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">

        <Navbar />

        {/* Reduced spacing between sections */}
        <section className="py-5">
          <Hero />
        </section>

        <section className="py-5">
          <About />
        </section>

        <section className="py-5">
          <Technologies />
        </section>

        <section className="py-5">
          <Internship />
        </section>

        <section className="py-5">
          <Projects />
        </section>

        <section className="py-5 pb-20">
          <Contact />
        </section>

      </div>
    </div>
  );
};

export default App;