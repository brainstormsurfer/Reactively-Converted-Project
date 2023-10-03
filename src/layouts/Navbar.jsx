import NavLinks from "../components/sections/HeaderSection/NavLinks";

const Navbar = ({ logoSrc }) => {
  return (
    <nav className="main-nav">
      <img src={logoSrc} alt="My Portfolio" className="logo" />;
      <NavLinks />
    </nav>
  );
};

export default Navbar;
