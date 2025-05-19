import { createBrowserRouter, Link } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <div className="wapper">
        <LoginPage />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div className="wapper">
        <RegisterPage />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div className="wapper">
        <HomePage />
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
