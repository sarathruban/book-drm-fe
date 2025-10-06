import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Styles/Sidebar.css";
import Logo from "../assets/Logo.png";
import { AudioOutlined, BookOutlined, HomeOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const Sidebar = () => {
  return (
    <Sider >
      {/* Logo Section */}
      <div className="sidebar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">
          <HomeOutlined style={{ fontSize: "24px" }} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/books" className="nav-item">
          <BookOutlined style={{ fontSize: "24px" }} />
          <span>Books</span>
        </NavLink>
        <NavLink to="/profile" className="nav-item">
          <AudioOutlined style={{ fontSize: "24px" }} />
          <span>Audio</span>
        </NavLink>
      </nav>
    </Sider>
  );
};

export default Sidebar;
