import { motion } from "framer-motion";
import nitImage from "../assets/Internships/nit.jpg";
import vanurtechImage from "../assets/Internships/vanurtech.jpg";

const Internship = () => {
  return (
    <section id="internship" className="border-neutral-200 dark:border-neutral-800 py-16 px-6">
      <h2 className="mb-12 text-center text-4xl font-semibold">
        Internships
      </h2>

      {/* NIT Rourkela */}
      <div className="mb-12 flex flex-wrap items-center justify-center">
        
        {/* Image - Left */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={nitImage}
            alt="NIT Rourkela"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Content - Right */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl lg:w-3/4 lg:pl-12"
        >
          {/* Internship Name - BIG PURPLE */}
<h2 className="text-3xl font-bold text-purple-500 mb-2">
  Data Science & Artificial Intelligence – NIT Rourkela
</h2>

{/* Project Name - Smaller White */}
<h3 className="text-lg text-neutral-800 dark:text-white font-medium mb-4">
  Heart Disease Prediction System
</h3>

          {/* Description */}
          <p className="text-neutral-400 text-justify leading-7">
            Built a Heart Disease Prediction System using ensemble learning 
            techniques including Random Forest, Gradient Boosting, and Voting 
            Classifier. The system analyzed clinical parameters such as age, 
            blood pressure, and cholesterol levels to predict cardiovascular risk.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm text-purple-400">
              Python
            </span>
            <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm text-purple-400">
              Ensemble Learning
            </span>
            <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm text-purple-400">
              Scikit-learn
            </span>
          </div>
        </motion.div>
      </div>

      {/* Vanurtech */}
      <div className="mb-16 flex flex-wrap items-center justify-center">
        
        {/* Content - Left */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl lg:w-3/4 lg:pr-12"
        >
          {/* Internship Name - BIG PURPLE */}
<h2 className="text-3xl font-bold text-purple-500 mb-2">
  Full Stack Development – Vanurtech Media Pvt Ltd
</h2>

{/* Project Name - Smaller White */}
<h3 className="text-lg text-neutral-800 dark:text-white font-medium mb-4">
  Book Management System
</h3>

          {/* Description */}
          <p className="text-neutral-400 text-justify leading-7">
            Developed a Books Management Web Application using the MERN stack 
            with complete CRUD functionality. Implemented REST APIs, responsive 
            UI, search & filter features, and seamless frontend-backend integration.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm text-purple-400">
              MongoDB
            </span>
            <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm text-purple-400">
              Express.js
            </span>
            <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm text-purple-400">
              React.js
            </span>
            <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm text-purple-400">
              Node.js
            </span>
          </div>
        </motion.div>

        {/* Image - Right */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={vanurtechImage}
            alt="Vanurtech"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;