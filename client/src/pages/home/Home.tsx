import React from "react";
import styles from "./styles/home.module.scss";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../assets/common/custom/CustomButton";
import { ADD_EMPLOYEES } from "../../assets/common/vars";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../../store/API/employeesApi";
import { columns } from "../../assets/common/custom/Columns";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes.routes";
import { useAppSelector } from "../../store/hooks/hooks";

const Home: React.FC = () => {
  //------------------------
  const user = useAppSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const { data, isLoading } = useGetAllEmployeesQuery();

  const goToAddEmployees = () => navigate(ROUTES.employeeAdd);
  //------------------------

  //-----------------
  React.useEffect(() => {
    if (!user) {
      navigate(ROUTES.login);
    }
  }, [navigate, user]);
  //-----------------

  return (
    <Layout>
      <div className={styles.holder}>
        <div className={styles.add}>
          <CustomButton
            icon={<PlusCircleOutlined />}
            type="primary"
            onClick={goToAddEmployees}
          >
            {ADD_EMPLOYEES}
          </CustomButton>
        </div>

        <Table
          loading={isLoading}
          dataSource={data}
          pagination={false}
          columns={columns}
          rowKey={(record) => record.id || ""}
          onRow={(record) => {
            return {
              onClick: () => navigate(`${ROUTES.employee}/${record.id}`),
            };
          }}
        />
      </div>
    </Layout>
  );
};

export default Home;
