import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiUserPlus } from "react-icons/fi";

const Sidebar = () => {
  // Inline styles
  const sidebarStyle = {
    width: "250px",
    height: "100vh",
    background: "linear-gradient(to bottom, #4c8bf5, #dbeafe)",
    color: "#333",
    boxShadow: "5px 0px 15px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    marginBottom: "15px",
    background: "#f0f9ff",
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
  };

  const iconStyle = {
    marginRight: "10px",
    fontSize: "20px",
  };

  return (
    <div style={sidebarStyle}>
      {/* Sidebar Header */}
      <div style={headerStyle}>User Management</div>

      {/* Navigation Links */}
      <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
        {/* Home */}
        <li>
          <Link to="/" style={linkStyle}>
            <FiHome style={iconStyle} />
            Home
          </Link>
        </li>

        {/* Manage Users */}
        <li>
          <Link to="/users" style={linkStyle}>
            <FiUsers style={iconStyle} />
            Manage Users
          </Link>
        </li>

        {/* Add User */}
        <li>
          <Link to="/users/add" style={linkStyle}>
            <FiUserPlus style={iconStyle} />
            Add User
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
