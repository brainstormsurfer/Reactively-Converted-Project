import TypeWriter from "./Typewriter.jsx";
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  const skills = ["Photographer", "Designer", "UI/UX Dev"];

  return (   
    <header className="header-home">
      <div className="container">
        <div className="header-content">
        {isHomeRoute && <TypeWriter words={skills} />}
          {/* <TypeWriter words={skills} wait={300} /> */}
          <p className="lead">
            I specialize in graphic design, UI/UX and photography
          </p>
            <Link to="/work" className="btn-light">
              View My Work
            </Link>  
        </div>
      </div>
      </header>
  );
};

export default Header;
