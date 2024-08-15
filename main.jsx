import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/loginpage.jsx";
import Price from "./components/Price.jsx";
import MidSection from "./components/mid-section.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MidSection /> },
      {
        path: "/Login",
        element: <Login />,
      },

      {
        path: "/Price",
        element: <Price />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
