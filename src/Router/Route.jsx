import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Detailes from "../pages/Detailes/Detailes";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/detailes/:id",
        element: <Detailes></Detailes>,
        // loader: fetch("/data.json"),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default route;
