// import {
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router";
// import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="work" element={<Work />} />
//     </Route>
//   )
// );

function App() {
  return (
  <>
  
  <Home />
   {/* <RouterProvider router={router} />; */}
  </>
  )
}

export default App;
