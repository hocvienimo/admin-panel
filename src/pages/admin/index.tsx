import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <h2 className="text-xl font-semibold">Trang Tổng quan</h2>
        <p>Chào mừng đến với bảng điều khiển quản trị!</p>
      </div>
    </div>
  );
};

export default Dashboard;
