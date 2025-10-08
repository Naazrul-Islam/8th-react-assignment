import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './coponents/Root.jsx';
import Home from './assets/Page/Home.jsx';
import Apps from './assets/Page/Apps.jsx';
import Installation from './assets/Page/Installation.jsx';
import detailsApplication from './assets/Page/detailsApplication.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
        
        Component: detailsApplication,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>,
)
