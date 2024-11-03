import React from "react";
import { Layout, Space, Typography } from "antd";
import styles from "./styles/header.module.scss";
import {
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../assets/common/custom/CustomButton";
import { EXIT, HELLO, LOGIN, REGISTER, STAFF,USER } from "../../assets/common/vars";
import { ROUTES } from "../../routes/Routes.routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { logout } from "../../store/services/authSlice";
import { useLogoutGoogleMutation } from "../../store/API/google/googleApi";
 

const Header: React.FC = () => {
  //------------------------------
  const user = useAppSelector((state) => state.auth.user);
 
  const  [logoutGoogleUser] = useLogoutGoogleMutation()
 
  const name = user && user.name.length > 0 ? user.name : USER
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogoutClick = async () => {
    dispatch(logout());
    navigate(ROUTES.login);
    await logoutGoogleUser().unwrap()
  }
  //------------------------------

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={ROUTES.home}>
          <CustomButton type="link">
            <Typography.Title
              style={{ marginBottom: "0px", color: "#fff" }}
              level={1}
            >
              {STAFF}
            </Typography.Title>
            <Space>
              <Typography.Text
              style={{ marginBottom: "0px", color: "#fff" }}
            >
              {HELLO} {name}
            </Typography.Text>
            </Space>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        {user ? (
          <CustomButton
            type="link"
            icon={<LogoutOutlined />}
            onClick={onLogoutClick}
          >
            {EXIT}
          </CustomButton>
        ) : (
          <>
            <Link to={ROUTES.register}>
              <CustomButton icon={<UserOutlined />} type="link">
                {REGISTER}
              </CustomButton>
            </Link>
            <Link to={ROUTES.login}>
              <CustomButton icon={<LoginOutlined />} type="link">
                {LOGIN}
              </CustomButton>
            </Link>
          </>
        )}
      </Space>
    </Layout.Header>
  );
};

export default Header;
