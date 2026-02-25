import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-neutral-200 dark:border-neutral-800 py-16 px-6">
      
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter space-y-4">

        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone - Clickable */}
        <motion.a
          href={`tel:${CONTACT.phoneNo}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="block text-purple-500 hover:underline text-lg"
        >
          {CONTACT.phoneNo}
        </motion.a>

        {/* Email - Clickable */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="block text-purple-500 hover:underline text-lg"
        >
          {CONTACT.email}
        </motion.a>

      </div>
    </div>
  );
};

export default Contact;