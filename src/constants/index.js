import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a focus on building intelligent and impactful applications. With hands-on experience in front-end technologies like React and Next.js, and back-end technologies including Node.js, MongoDB, and Firebase, I specialize in developing scalable solutions powered by AI, IoT, and real-time data. My work aims to merge innovation with purpose—enhancing safety, agriculture, and everyday life through technology.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for building impactful and intelligent web and IoT-based applications. With hands-on experience in technologies like React, Node.js, MongoDB, Firebase, and Python, I have developed innovative solutions in the fields of women’s safety, agriculture, and environmental monitoring. My journey into tech began with a desire to solve real-world problems, which has evolved into a drive to create meaningful, user-centered solutions using AI, machine learning, and connected devices. I thrive in collaborative environments, love tackling complex challenges, and continuously explore new technologies to stay ahead. Beyond coding, I enjoy working on socially impactful innovations, prototyping hardware integrations, and contributing to tech communities.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Potato Leaf Disease Prediction System",
    image: project1,
    description:
      "AI-Driven Potato Leaf Disease Prediction System is a smart solution that uses image processing and machine learning to detect and classify potato leaf diseases like Early Blight and Late Blight. It helps farmers take timely action to prevent crop loss, improve yield, and promote sustainable farming through AI-powered precision agriculture.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "OpenCV", "Python", "Tensorflow"],
  },
  {
    title: "IoT-Based Weather Prediction System ",
    image: project2,
    description:
      "Built an IoT‐based weather prediction system using sensors like DHT11, BMP180, and a rain sensor for real‐ time data collection. The ARIMA model provides accurate forecasts, displayed on a user‐friendly interface. Integrated with an ESP8266 module, it ensures seamless cloud data transmission for remote monitoring and reliable weather updates. ",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
  {
    title: "Women Safety App",
    image: project3,
    description:
      "Developed a women’s safety app that allows users to report unsafe areas and send emergency alerts. It features a dynamic heatmap, panic button, and real‐time location sharing. The app enhances community safety with GPS and notifications, providing a reliable, user‐friendly solution to ensure personal security and awareness. ",
    technologies: ["Kotlin", "Node.js", "Google Maps API"],
  },
  {
    title: "Online Voting System",
    image: project4,
    description:
      "An online voting system allows secure digital voting with features like voter authentication, role‐based access, and encrypted, anonymous votes. Admins can manage elections and view results. Built with HTML, CSS, JavaScript, and secure backend frameworks, it ensures efficiency, transparency, and robust security to prevent tampering and ensure integrity. ",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
];

export const CONTACT = {
  //address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 9938463515 ",
  email: "anishapradhan2005@gmail.com",
};
