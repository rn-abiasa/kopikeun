import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";
import MenuPage from "./pages/menu.jsx";
import GalleryPage from "./pages/gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
