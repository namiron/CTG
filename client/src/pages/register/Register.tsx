import React from "react";
import Layout from "../../components/layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import {
  CONFIRM_PASSWORD,
  IS_ACCOUNT,
  LOGIN,
  REGISTER,
  R_T_G_WAY,
  UNKNOWN_ERROR,
} from "../../assets/common/vars";
import CustomInput from "../../assets/common/custom/CustomInput";
import CustomPasswordInput from "../../assets/common/custom/CustomPasswordInput";
import CustomButton from "../../assets/common/custom/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes.routes";
import { ISentUser } from "../Login/types/ILoginTypes";
import { useRegisterMutation } from "../../store/API/authAPI";
import { isErrorWithMessage } from "../../errors/isrErrorWithMessage";
import ErrorMessage from "../../components/err/ErrorMessage";
import { useGoogleCallback } from "../../store/API/google/googleData";

const Register: React.FC = () => {
  //----------------------------
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [formError, setFormError] = React.useState<string>("");

  const onRegister = async (data: ISentUser) => {
    try {
      await registerUser(data).unwrap();
      navigate(ROUTES.home);
    } catch (err) {
      
      const maybeError = isErrorWithMessage(err);
      if (maybeError) {
        setFormError(err.data?.message || '');
      } else {
        setFormError(UNKNOWN_ERROR);
      }
    }
  };
  //----------------------------

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title={REGISTER} style={{ width: "30rem" }}>
          <Form onFinish={onRegister}>
            <CustomInput name="name" placeholder="Name" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <CustomPasswordInput name="password" placeholder="Password" />
            <CustomPasswordInput
              name={CONFIRM_PASSWORD}
              placeholder="Confirm Password"
            />
            <CustomButton type="primary" htmlType="submit" loading={isLoading}>
              {REGISTER}
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              {IS_ACCOUNT}
              <Link to={ROUTES.login}>{LOGIN}</Link>
            </Typography.Text>
            <ErrorMessage message={formError} />
          </Space>
              <CustomButton type="primary" onClick={useGoogleCallback} htmlType="submit" loading={isLoading}>
              {R_T_G_WAY}
            </CustomButton>
        </Card>
      </Row>
    </Layout>
  );
};

export default Register;
