import React from "react";

const NavLink = ({ href, current, text }) => {
    console.log(current)
  return (
    <li>
      <a href={href} className={current ? "current" : ""}>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
