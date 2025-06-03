// routers/adminRouter.tsx
import LayoutAdmin from "../pages/Admin/LayoutAdmin";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";
import Products from "../pages/Admin/Products";
import Quanlinguoidung from "../pages/Admin/Quanlinguoidung";
import Quanlidonhang from "../pages/Admin/Quanlidonhang";
import Quanlibaiviet from "../pages/Admin/Quanlibaiviet";
import Quanliquyen from "../pages/Admin/Quanliquyen";
import CategoriesAdd from "../pages/Admin/CategoriesAdd";
import Quanlibienthe from "../pages/Admin/Quanlibienthe";

export const adminRouter = {
  path: "/admin",
  element: <LayoutAdmin />,
  children: [
    { path: "dashboard", element: <Dashboard /> },
    { path: "categories", element: <Categories /> },
    { path: "products", element: <Products /> },
    { path: "users", element: <Quanlinguoidung /> },
    { path: "orders", element: <Quanlidonhang /> },
    { path: "posts", element: <Quanlibaiviet /> },
    { path: "roles", element: <Quanliquyen /> },
    { path: "categories/add", element: <CategoriesAdd /> },
    { path: "variants", element: <Quanlibienthe /> },
  ],
};
