import NavLink from "./NavLink.jsx"; // This one is in both HeaderContent and Navbar
import TypeWriter from "./Typewriter.jsx";

const Header = () => {
  const skills = ["Photographer", "Designer", "UI/UX Dev"];

  return (
    <header className="header-home">
      <div className="container">
        <div className="header-content">
          <TypeWriter words={skills} wait={300} />
          <p className="lead">
            I specialize in graphic design, UI/UX and photography
          </p>
          <NavLink fromHeader={true} text={"View My Work"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
