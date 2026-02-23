import logo from "../assets/AnishaLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 bg-neutral-900 relative z-30">
  <div className="flex items-center">
    <img src={logo} alt="logo" className="mx-2 w-10" />
  </div>
  <div className="flex items-center gap-4 text-2xl text-neutral-300">
    <FaLinkedin />
    <FaGithub />
    <FaInstagram />
    <FaTwitter />
  </div>
</nav>
  );
};

export default Navbar;
