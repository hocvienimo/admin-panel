import React from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import UserForm from "../../../components/UserForm";

const UpdateUser: React.FC = () => {
  const handleUserSubmit = async (data: any) => {
    // Gửi dữ liệu tới API để cập nhật người dùng
    console.log("Update user data:", data);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <h2 className="text-xl font-semibold">Cập nhật Người dùng</h2>
        <UserForm onSubmit={handleUserSubmit} />
      </div>
    </div>
  );
};

export default UpdateUser;
