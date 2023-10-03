import React from "react";

const Navbar = ({ logoSrc, links }) => {
  return (
    <nav className="main-nav">
      <img src={logoSrc} alt="My Portfolio" className="logo" />
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className={link.current ? "current" : ""}>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
