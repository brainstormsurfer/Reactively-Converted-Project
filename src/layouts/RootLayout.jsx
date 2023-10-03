import { NavLink, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="work">Work</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      {/* <main>

      </main>
        <footer>

        </footer>       */}
    </div>
  );
}
