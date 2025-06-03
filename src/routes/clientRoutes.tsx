// routers/clientRouter.tsx
import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShopPage from "../pages/Shop/ShopPage";
import PageDetail from "../pages/DetailProducts/PageDetail";

export const clientRouter = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "", element: <HomePage /> },
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
    { path: "shop", element: <ShopPage /> },
    { path: "detail", element: <PageDetail /> },
  ],
};
