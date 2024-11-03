import type { ColumnsType } from "antd/es/table";
import { AGE, NAME, FIRST_NAME, ADDRESS } from "../vars";
import { IEmployeeType } from "./types/IEmployeesType";

export const columns: ColumnsType<IEmployeeType> = [
  { title: NAME, dataIndex: FIRST_NAME, key: FIRST_NAME },
  { title: AGE, dataIndex: AGE, key: AGE },
  { title: ADDRESS, dataIndex: ADDRESS, key: ADDRESS },
];
