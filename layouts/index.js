import React from "react";
import Style from "./index.css";
import { Link, history } from "umi";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default (props) => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1"><Link to={'/home'}>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to={'/about'}>About</Link></Menu.Item>
            <Menu.Item key="3"><Link to={'/user'}>user</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {props.children}
          </Breadcrumb>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>

      {/*   <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/user'}>user</Link>
            <button onClick={()=>{history.push('/')}}>跳转Index</button>
            <div className={Style.header}>header</div>
            <div className={Style.main}>{props.children}</div>
            <div className={Style.footer}>footer</div> */}
    </>
  );
};
