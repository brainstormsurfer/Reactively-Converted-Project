import { NavLink, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <header className={`${!isHomeRoute ? "header-inner" : "transparent-navbar"}`}>
      <div class="container">
        <nav className="main-nav">
          <img
            src="../../src/assets/img/logo.png"
            alt="logo"
            className="logo"
          />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Work
              </NavLink>
            </li>
            <li>
              <Link
                to="/about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Connect
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
