import React from "react";
import { Alert } from "antd";
import { IErrorProps } from "./types/IErrorProps";

const ErrorMessage: React.FC<IErrorProps> = ({ message }) => {
  if (!message) {
    return null;
  } else {
    return <Alert message={message} type="error"/>;
  }
};

export default ErrorMessage;
