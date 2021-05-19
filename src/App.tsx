import React from 'react'
import './App.css'
import { Layout, Menu, Typography } from 'antd'
import { Link } from '@reach/router'
import { Routes } from './Routes'

const Header = Layout.Header
const Content = Layout.Content
const Sider = Layout.Sider

function App() {
  const isMobile = true

  const renderMenu = (forMobile?: boolean) => {
    return (
      <Menu
        style={forMobile ? undefined : { height: '100vh' }}
        mode={forMobile ? 'horizontal' : 'vertical-left'}
      >
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="remount">Remount</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="state">State</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="github">Github</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="numbers">Numbers</Link>
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <Layout>
      <Sider width={258} collapsed={false}>
        {renderMenu(!isMobile)}
      </Sider>
      <Layout>
        <Header>
          <Typography.Title level={2} style={{ color: '#fff' }}>
            Test Harness
          </Typography.Title>
        </Header>
        <Content>
          <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
