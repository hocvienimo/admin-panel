import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

const UserManagement: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <h2 className="text-xl font-semibold">Quản lý Người dùng</h2>

        {/* Nút Add New */}
        <Link to="/admin/user/add-new">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
            Thêm người dùng mới
          </button>
        </Link>

        {/* Logic để hiển thị danh sách người dùng */}
      </div>
    </div>
  );
};

export default UserManagement;
