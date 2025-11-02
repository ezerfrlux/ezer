import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-10 px-4 sm:px-6 lg:px-8 rounded-t-2xl w-full ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-0 gap-10">
        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <Link href="/projects" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-[#ff80b5] hover:to-[#9089fc] transition-all duration-300">
            Projects
          </Link>
          <Link href="/about" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-[#ff80b5] hover:to-[#9089fc] transition-all duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-[#ff80b5] hover:to-[#9089fc] transition-all duration-300">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center md:justify-end">
          <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition-colors"><AiOutlineTwitter /></a>
          <a href="#" className="hover:text-white transition-colors"><FaGithub /></a>
          <a href="#" className="hover:text-white transition-colors"><FaYoutube /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ezer_fr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
