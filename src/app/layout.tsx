"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  DeploymentUnitOutlined,
  MonitorOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { App, Menu, Breadcrumb, Layout, theme, ConfigProvider } from "antd";
import { CSSProperties, useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const logoStyle: CSSProperties = {
  fontFamily: "'Titillium Web', sans-serif !important",
  fontSize: "2.2rem !important",
  padding: "1rem",
  display: "block",
  position: "relative",
  fontWeight: 700,
  background: "-webkit-linear-gradient(135deg, #1cffff, #ff13e0)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
};

const { Header, Content, Footer, Sider } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "'Titillium Web', sans-serif",
              fontSize: 16,
            },
            components: {
              Menu: {
                darkItemSelectedBg: "rgba(255, 100, 255, 0.2)",
                iconSize: 30,
                collapsedIconSize: 30,
                // itemMarginBlock: 0,
                // itemMarginInline: 10,
                // iconMarginInlineEnd: 50,
                itemHeight: 60,
              },
            },
          }}
        >
          <App>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <figure style={logoStyle}>
                  {collapsed ? "Mu" : "Mukh.tar"}
                </figure>
                <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
                  <Menu.Item key="/about" icon={<UserOutlined />}>
                    <Link href="/about">About</Link>
                  </Menu.Item>
                  <Menu.Item key="/" icon={<DeploymentUnitOutlined />}>
                    <Link href="/">Solana Validator</Link>
                  </Menu.Item>
                  <Menu.Item key="/community" icon={<UsergroupAddOutlined />}>
                    <Link href="/community">Community</Link>
                  </Menu.Item>
                  <Menu.Item key="/analytics" icon={<MonitorOutlined />}>
                    <Link href="/analytics">Analytics *soon*</Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                {/* <Header style={{ padding: '0', background: colorBgContainer }} /> */}
                <Content style={{ margin: "0 16px" }}>
                  <div
                    style={{
                      padding: 24,
                      margin: "16px 0 0 0",
                      minHeight: 260,
                      background: colorBgContainer,
                      borderRadius: borderRadiusLG,
                    }}
                  >
                    {children}
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>© 2024</Footer>
              </Layout>
            </Layout>
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}
