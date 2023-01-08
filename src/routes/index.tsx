import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component } from "react";

import Homepage from "../pages";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";

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

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
