import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../Components/Main/Header";

const AdminLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
