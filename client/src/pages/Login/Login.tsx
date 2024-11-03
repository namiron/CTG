import React from "react";
import Layout from "../../components/layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN, NO_ACCOUNT, REGISTER, UNKNOWN_ERROR } from "../../assets/common/vars";
import CustomInput from "../../assets/common/custom/CustomInput";
import CustomPasswordInput from "../../assets/common/custom/CustomPasswordInput";
import CustomButton from "../../assets/common/custom/CustomButton";
import { ROUTES } from "../../routes/Routes.routes";
import { ISentUser } from "./types/ILoginTypes";
import { useLoginMutation } from "../../store/API/authAPI";
import { isErrorWithMessage } from "../../errors/isrErrorWithMessage";
import ErrorMessage from "../../components/err/ErrorMessage";

const Login: React.FC = () => {
  
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginMutation();
  const [formError, setFormError] = React.useState<string>("");

  const onLogin = async (data: ISentUser) => {
    try {
      await loginUser(data).unwrap();

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

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title={LOGIN} style={{ width: "30rem" }}>
          <Form onFinish={onLogin}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <CustomPasswordInput name="password" placeholder="Password" />
            <CustomButton type="primary" htmlType="submit" loading={isLoading}>
              {LOGIN}
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              {NO_ACCOUNT}
              <Link to={ROUTES.register}>{REGISTER}</Link>
            </Typography.Text>
            <ErrorMessage message={formError} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
