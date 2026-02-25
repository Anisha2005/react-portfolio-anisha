import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/AnishaProfile.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex items-center px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto w-full">

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-5"
        >
          <h1 className="text-5xl lg:text-7xl font-thin leading-tight">
            Anisha <br /> Pradhan
          </h1>

          <h2 className="text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 text-justify leading-relaxed">
            {HERO_CONTENT}
          </p>

          <a
            href="/Anisha_Pradhan_Resume.pdf"
            download
            className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={profilePic}
            alt="Anisha Pradhan"
            className="w-72 lg:w-96 rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;