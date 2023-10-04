import NavLink from "./NavLink"

const NavLinks = () => {
  const navLinks = [
    { id: "1", href: "index.html", current: true, text: "Home" },
    { id: "2", href: "about.html", text: "About" },
    { id: "3", href: "work.html", text: "Work" },
    { id: "4", href: "work.html", text: "Contact" },
  ];
  return (
    <ul>
      {
        navLinks.map((link) => (
        <NavLink key={link.id} {...link} />
      ))}
    </ul>
  );
};

export default NavLinks;
