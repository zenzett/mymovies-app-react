import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Favorite from "../pages/Favorite";
import Detail from "../pages/Detail";
import Homepage from "../pages";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/detail/:id_movie",
    element: <Detail />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
