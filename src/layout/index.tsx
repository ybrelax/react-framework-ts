import React, { Component } from 'react';
import { Layout } from 'antd';
import Menu from "./components/menu";
import Breadcrumb from "./components/breadcrumb";
import renderRoutes from "@/router/index";
import routes from "@/router/modules";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.less';

const { Header, Sider, Content } = Layout;

class Root extends Component<any, any> {
  constructor(prop: any) {
    super(prop);
    this.state = {
      collapsed: false,
    };
  };


  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            style={{ margin: '0 16px' }}
          >
            <Breadcrumb {...this.props}/>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {renderRoutes(routes)}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Root;