import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiReplit } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        André Novais
      </a>
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/andrenovaisbrito">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/andr%C3%A9-novais-brito-792b071b2/?locale=en_US">
          <BsLinkedin />
        </a>
        <a href="https://replit.com/@AndreNovaisBrit">
          <SiReplit />
        </a>
      </div>

      <div className="footer__copywright">
        <small>&copy; André Novais Dev. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
