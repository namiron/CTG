import React from "react";
import { IEmployeeType, IFormProps } from "./types/IFormProps";
import { Card, Form, Space } from "antd";
import CustomInput from "../../assets/common/custom/CustomInput";
import {
  ADDRESS,
  AGE,
  FIRST_NAME,
  lAST_NAME,
  NAME,
  TYPE,
} from "../../assets/common/vars";
import ErrorMessage from "../err/ErrorMessage";
import CustomButton from "../../assets/common/custom/CustomButton";



const FormEmployee: React.FC<IFormProps<IEmployeeType>> = ({
  onFinish,
  title,
  btnText,
  error,
  employee,
}) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="form-employee" onFinish={onFinish} initialValues={employee}>
        <CustomInput type={TYPE} name={FIRST_NAME} placeholder={NAME} />
        <CustomInput type={TYPE} name={lAST_NAME} placeholder={lAST_NAME} />
        <CustomInput type={TYPE} name={AGE} placeholder={AGE} />
        <CustomInput type={TYPE} name={ADDRESS} placeholder={ADDRESS} />
        <Space>
          <ErrorMessage message={error} />
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};

export default FormEmployee;
