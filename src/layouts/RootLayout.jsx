import { NavLink, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav className="main-nav">
          <img
            src="../../src/assets/img/logo.png"
            alt="logo"
            className="logo"
          />
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="work">Work</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
