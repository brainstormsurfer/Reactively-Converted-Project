// import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Header } from "./sections";

function App() {
  return (
  <Header />
    // <BrowserRouter>
    // <header>
    // <nav className="main-nav">    
    // <h3>NAVBAROOSH</h3>
    // <Link to="/">Home</Link>
    // <NavLink to="about">About</NavLink>
    // </nav>
    // </header>
    //   <main>
    //     <Routes>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
  );
}

export default App;

// import {
// import { NavLink } from 'react-router';
  // createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   BrowserRouter,
//   Router,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="work" element={<Work />} />
//     </Route>
//   )
// );

{
  /* <RouterProvider router={router} />; */
}
