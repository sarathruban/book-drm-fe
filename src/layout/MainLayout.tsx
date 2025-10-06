import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../layout/MainLayout.css";
import { Layout } from "antd";

const { Content } = Layout;

const MainLayout = () => (
  <Layout className="main-layout">
    <Sidebar />
    <Layout className="layout-body">
      <Content className="content">
        <Outlet /> {/* Page content scrolls */}
      </Content>
    </Layout>
  </Layout>
);

export default MainLayout;
