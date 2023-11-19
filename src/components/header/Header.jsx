import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import LOGO_UFC from "../../assets/logos/Brasaoufc_horizontal.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>André Novais</h1>
        <h5 className="text-light">Back-end Developer</h5>
        <div className="logo_ufc">
          <img src={LOGO_UFC} alt="" />
        </div>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
