import React from "react";
import { Button, Form } from "antd";
import { ICustomProps } from "./types/ICustomProps";

const CustomButton: React.FC<ICustomProps> = ({
  children,
  htmlType,
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}) => {
  return (
    <Form.Item style={{ marginBottom: "0px" }}>
      <Button
        htmlType={htmlType || "button"}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
