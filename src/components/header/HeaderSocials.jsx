import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiReplit } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/andr%C3%A9-novais-brito-792b071b2/?locale=en_US"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/AndreNovaisBrito"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://replit.com/@AndreNovaisBrit"
        target="_blank"
        rel="noreferrer"
      >
        <SiReplit />
      </a>
    </div>
  );
};

export default HeaderSocials;
