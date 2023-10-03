import React from "react";
import TypeWriter from "../components/Typewriter.jsx";
import logo from "../assets/img/logo.png";
import Navbar from "../layouts/Navbar";

const Header = () => {
  const words = ["Photographer", "Designer", "UI/UX Developer"];
  const navLinks = [
    { href: "index.html", current: true, text: "Home" },
    { href: "about.html", text: "About" },
    { href: "work.html", text: "Work" },
    { href: "contact.html", text: "Contact" },
  ];
  return (
    <header className="header-home">
      <div className="container">
        <Navbar logoSrc={logo} links={navLinks} />
        <div className="header-content">
        <TypeWriter words={words} wait={300} />
          <p className="lead">
            I specialize in graphic design, UI/UX and photography
          </p>
          <a href="work.html" className="btn-light">
            View My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
