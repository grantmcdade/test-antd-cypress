import React from "react";
import "./App.css";
import { Layout, Menu, Typography } from "antd";
import { Link } from "@reach/router";
import { Routes } from "./Routes";

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

function App() {
  return (
    <Layout>
      <Sider theme="dark" width={258} collapsed={false}>
        <Menu>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="dashboard">Dashboard</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <div>
            <Typography.Title level={2}>React App With antd</Typography.Title>
          </div>
        </Header>
        <Content>
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
