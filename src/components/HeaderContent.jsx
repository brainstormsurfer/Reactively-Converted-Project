import TypeWriter from "./Typewriter.jsx";

const HeaderContent = () => {
  const words = ["Photographer", "Designer", "UI/UX Developer"];

  return (
    <div className="header-content">
        <TypeWriter words={words} wait={300} />
          <p className="lead">
            I specialize in graphic design, UI/UX and photography
          </p>
          <a href="work.html" className="btn-light">
            View My Work
          </a>
        </div>
  )
}

export default HeaderContent