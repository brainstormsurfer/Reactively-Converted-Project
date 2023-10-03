import React from "react";
import NavLink from "../components/NavLink";
import {nanoid} from 'nanoid'

const Navbar = ({ logoSrc, links }) => {
  return (
    <nav className="main-nav">
      <img src={logoSrc} alt="My Portfolio" className="logo" />
      <ul>
        {links.map((link) => <NavLink key={nanoid()} {...link}/>)}
      </ul>
    </nav>
  );
};

export default Navbar;
