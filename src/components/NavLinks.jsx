import NavLink from "../components/NavLink";
import { nanoid } from "nanoid";

const NavLinks = () => {
  const navLinks = [
    { href: "index.html", current: true, text: "Home" },
    { href: "about.html", text: "About" },
    { href: "work.html", text: "Work" },
    { href: "contact.html", text: "Contact" },
  ];
  return (
    <ul>
      {
        navLinks.map((link) => (
        <NavLink key={nanoid()} {...link} />
      ))}
    </ul>
  );
};

export default NavLinks;
