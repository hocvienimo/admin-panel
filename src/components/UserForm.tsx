import React, { useState } from "react";

interface UserFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar?: File | null;
  role: string;
}

interface UserFormProps {
  onSubmit: (data: UserFormData) => Promise<void>;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: null,
    role: "register",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, avatar: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu không khớp.");
      return;
    }

    try {
      await onSubmit(formData); // Gọi hàm onSubmit truyền từ cha
      setSuccess("Người dùng đã được đăng ký thành công!");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        avatar: null,
        role: "register",
      });
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
      <div>
        <label className="block text-sm font-medium">Tên</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Mật khẩu</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Xác nhận mật khẩu</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Vai trò</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="register">Register</option>
          <option value="admin">Admin</option>
          <option value="leader">Leader</option>
          <option value="editor">Editor</option>
          <option value="content">Content</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Ảnh đại diện</label>
        <input
          type="file"
          name="avatar"
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Đăng ký
      </button>
    </form>
  );
};

export default UserForm;
