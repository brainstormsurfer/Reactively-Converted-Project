const NavLink = ({ href, current, text }) => {

  return (
    <li>
      <a href={href} className={current ? "current" : ""}>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
