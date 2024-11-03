import React from "react";
import Layout from "../../components/layout/Layout";
import { Row } from "antd";
import FormEmployee from "../../components/forms/Form";
import { ADD_EMPLOYEES, CREATE, UNKNOWN_ERROR } from "../../assets/common/vars";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";
import { useAddEmployeeMutation } from "../../store/API/employeesApi";
import { ROUTES } from "../../routes/Routes.routes";
import { IEmployeeType } from "./types/IAddEmployeeTypes";
import { isErrorWithMessage } from "../../errors/isrErrorWithMessage";

const AddEmployee: React.FC = () => {
  //----------------------
  const [error, setError] = React.useState<string>("");
  
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);

  const [addEmployee] = useAddEmployeeMutation();

  const handleAddEmployee = async (data: IEmployeeType) => {
    try {
      await addEmployee(data).unwrap();
      navigate(`${ROUTES.status}/created`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data?.message || '');
      } else {
        setError(UNKNOWN_ERROR);
      }
    }
  };
  //----------------------

  //---------------------
  React.useEffect(() => {
    if (!user) {
      navigate(ROUTES.login);
    }
  }, [user, navigate]);
  //---------------------

  return (
    <Layout>
      <Row align="middle" justify="center">
        <FormEmployee
          title={ADD_EMPLOYEES}
          btnText={CREATE}
          onFinish={handleAddEmployee}
          error={error}
        />
      </Row>
    </Layout>
  );
};

export default AddEmployee;
