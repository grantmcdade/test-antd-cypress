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
      <Sider width={258} collapsed={false}>
        <Menu style={{height: '100vh'}}>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="remount">Remount</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
