import NavLinks from "../sections/homeHeaderSection/NavLinks"

const Navbar = ({ logoSrc }) => {
  return (
    <nav className="main-nav">
      <img src="../../src/assets/img/logo.png" alt="logo" className="logo"/>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
