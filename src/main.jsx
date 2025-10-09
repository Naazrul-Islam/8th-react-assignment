import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./coponents/Root.jsx";
import Home from "./Page/Home.jsx";
import Apps from "./Page/Apps.jsx";
import Installation from "./Page/Installation.jsx";
import DetailsApplication from "./Page/DetailsApplication.jsx";
import Error from "./Page/Error.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        // path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/apps/:id",

        Component: DetailsApplication,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
