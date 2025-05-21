// import React from "react";
import Headers from "../components/common/Headers";
import Footers from "../components/common/Footers";
import { Outlet } from "react-router-dom";

// type Props = {
//   children: React.ReactNode;
// };

const MainLayout = () => {
  return (
    <>
      <div className="wrap">
        <Headers />
        <Outlet />
        <Footers />
      </div>
    </>
  );
};

export default MainLayout;
