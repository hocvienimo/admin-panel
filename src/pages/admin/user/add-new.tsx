import React from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import UserForm from "../../../components/UserForm";

const AddNewUser: React.FC = () => {
  const handleUserSubmit = async (data: any) => {
    // Gọi API để thêm người dùng mới
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Người dùng đã được thêm thành công!");
    } else {
      alert("Có lỗi xảy ra!");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <h2 className="text-xl font-semibold">Thêm Người dùng Mới</h2>
        <UserForm onSubmit={handleUserSubmit} />
      </div>
    </div>
  );
};

export default AddNewUser;
