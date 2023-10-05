import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Work, ErrorPage } from "./pages";
import SharedLayout from './layouts/SharedLayout';

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/work", 
        element: <Work />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

const App = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
