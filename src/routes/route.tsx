import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import Dashboard from "../pages/Admin/Dashboard";
import LayoutAdmin from './../pages/Admin/LayoutAdmin';
import Categories from "../pages/Admin/Categories";
import Products from "../pages/Admin/Products";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>
      },
      {
        path: "categories",
        element: <Categories/>
      },
      {
        path: "products",
        element: <Products/>
      },
    ]
  }
]);
