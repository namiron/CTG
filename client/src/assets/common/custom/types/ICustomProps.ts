import React from "react";

export interface ICustomProps {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean;
  loading?:
    | boolean
    | {
        delay?: number;
      }
    | undefined;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
}
