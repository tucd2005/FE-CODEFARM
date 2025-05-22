import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import ShopPage from "../pages/Shop/ShopPage";
import DetailProduct from "../pages/DetailProducts/components/DetailProduct";
import PageDetail from "../pages/DetailProducts/PageDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
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
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "detail",
        element: <PageDetail />,
      },
    ],
  },
]);
