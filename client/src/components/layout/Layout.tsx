import React from "react";
import { Layout as AntLayout } from "antd";
import { ILayoutProps } from "./types/ILayoutProps";
import styles from "./styles/layout.module.scss";
import Header from "../header/Header";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <AntLayout.Content
          style={{
            height: "100%",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </AntLayout.Content>
      </div>
    </>
  );
};

export default Layout;
