const NavLink = ({ href, current, text, fromHeader }) => {
  return (
    fromHeader ? (
      <li>
        <a href={href} className="btn-light" >
          {text}
        </a>
      </li>
    ) : (
      <li>
        <a href={href} className={current ? "current" : ""}>
          {text}
        </a>
      </li>
    )
  );
};

export default NavLink;
