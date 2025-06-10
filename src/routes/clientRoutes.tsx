// routers/clientRouter.tsx

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShopPage from "../pages/Shop/ShopPage";
import PageDetail from "../pages/DetailProducts/PageDetail";

import OrderDetailPage from "../pages/OrderDetail/OrderDetailPage";
import OrderPage from "../pages/Order/OrderPage";

export const clientRouter = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "", element: <HomePage /> },
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
    { path: "shop", element: <ShopPage /> },
    { path: "detail", element: <PageDetail /> },
    { path: "detail", element: <PageDetail /> },
    { path: "order", element: <OrderPage /> },
    { path: "order/detail", element: <OrderDetailPage /> },
  ],
};
