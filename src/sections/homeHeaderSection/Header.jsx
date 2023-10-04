import logo from "../../assets/img/logo.png";
import Navbar from "../../shared/Navbar";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <header className="header-home">
      <div className="container">
        <Navbar logoSrc={logo} />
        <HeaderContent />
      </div>
    </header>
  );
};

export default Header;
