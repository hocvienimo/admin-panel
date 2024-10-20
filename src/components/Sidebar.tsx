import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-200 w-60 p-4">
      <h2 className="font-bold">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/admin/user">User Management</Link>
        </li>
        <li>
          <Link to="/admin/post">Post Management</Link>
        </li>
        <li>
          <Link to="/admin/category">Category Management</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
