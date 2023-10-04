import NavLink from "./NavLink.jsx"; // This one is in both HeaderContent and Navbar
import TypeWriter from "./Typewriter.jsx";

const HeaderContent = () => {
  const skills = ["Photographer", "Designer", "UI/UX Dev"];

  return (
    <div className="header-content">
      <TypeWriter words ={skills} wait={300} />
      <p className="lead">
        I specialize in graphic design, UI/UX and photography
      </p>
      <NavLink fromHeader={true} text={"View My Work"} />
    </div>
  );
};

export default HeaderContent;
