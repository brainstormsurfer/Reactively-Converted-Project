import NavLink from "./NavLink.jsx";
import TypeWriter from "./Typewriter.jsx";

const HeaderContent = () => {
  const words = ["Photographer", "Designer", "UI/UX Developer"];

  return (
    <div className="header-content">
      <TypeWriter words={words} wait={300} />
      <p className="lead">
        I specialize in graphic design, UI/UX and photography
      </p>
      <NavLink fromHeader={true} text={"View My Work"} />
    </div>
  );
};

export default HeaderContent;
