import { Form, Input } from "antd";
import React from "react";
import { ICustomProps } from "./types/ICustomItem";
import { MESSAGE } from "../vars";

const CustomInput: React.FC<ICustomProps> = ({
  name,
  shouldUpdate,
  placeholder,
  type = "text",
}) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: MESSAGE }]}
      shouldUpdate={shouldUpdate}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

export default CustomInput;
