import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../../store/API/employeesApi";
import { EDIT, EDIT_E, LOADING, UNKNOWN_ERROR } from "../../assets/common/vars";
import Layout from "../../components/layout/Layout";
import { Row } from "antd";
import FormEmployee from "../../components/forms/Form";
import { IEmployeeType } from "./types/IAddEmployeeTypes";
import { ROUTES } from "../../routes/Routes.routes";
import { isErrorWithMessage } from "../../errors/isrErrorWithMessage";

const EditEmployee: React.FC = () => {
  //---------------------------------
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [error, setError] = React.useState<string>("");
  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [editEmployee] = useEditEmployeeMutation();
  const handleEditEmployee = async (employee: IEmployeeType) => {
    try {
        const editedEmployee = {
            ...data,
            ...employee
        }
        await editEmployee(editedEmployee).unwrap();
        navigate(`${ROUTES.status}/updated`);
    } catch (err) {
        const maybeError = isErrorWithMessage(err);
        if (maybeError) {
          setError(err.data.message);
        } else {
          setError(UNKNOWN_ERROR);
        }
    }
  };
  //----------------------------------
  if (isLoading) {
    return <span>{LOADING}</span>;
  } else {
    return (
      <Layout>
        <Row align="middle" justify="center">
          <FormEmployee
            title={EDIT}
            btnText={EDIT_E}
            onFinish={handleEditEmployee}
            error={error}
            employee={data}
          />
        </Row>
      </Layout>
    );
  }
};

export default EditEmployee;
