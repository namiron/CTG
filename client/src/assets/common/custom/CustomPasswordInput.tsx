import React from "react";
import { Form, Input } from "antd";
import {
  CONFIRM_PASSWORD,
  MESSAGE,
  MESSAGE_ERROR,
  MESSAGE_ERROR_LENGTH_SHORT,
  PASSWORD,
} from "../vars";
import { CustomPasswordProps } from "./types/ICustomPasswordProps";

const CustomPasswordInput: React.FC<CustomPasswordProps> = ({
  name,
  placeholder,
  dependencies,
}) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        {
          required: true,
          message: MESSAGE,
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (name === CONFIRM_PASSWORD) {
              if (!value || getFieldValue(PASSWORD) === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(MESSAGE_ERROR));
            } else {
              if (!value) {
                return Promise.resolve();
              }
              if (value.length < 5) {
                return Promise.reject(new Error(MESSAGE_ERROR_LENGTH_SHORT));
              }
              return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large"></Input.Password>
    </Form.Item>
  );
};

export default CustomPasswordInput;
