import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/index";
import UserManagement from "./pages/admin/user/index";
import AddUser from "./pages/admin/user/add-new";
import UpdateUser from "./pages/admin/user/update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Dashboard />} />{" "}
        {/* Đảm bảo đường dẫn này có */}
        <Route path="/admin/user" element={<UserManagement />} />
        <Route path="/admin/user/add-new" element={<AddUser />} />
        <Route path="/admin/user/update" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
