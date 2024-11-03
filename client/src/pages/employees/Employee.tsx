import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "./styles/empl.module.scss";
import {
  useGetEmployeeQuery,
  useRemoveEmployeeMutation,
} from "../../store/API/employeesApi";
import { useAppSelector } from "../../store/hooks/hooks";
import {
  E_INFO,
  LOADING,
  NAME,
  AGE,
  ADDRESS,
  ACTIONS,
  EDIT,
  DELETE,
  A_Y_S_Y_W_T_D,
  CONFIRM,
  CANCEL,
  C_D,
  UNKNOWN_ERROR,
} from "../../assets/common/vars";
import { ROUTES } from "../../routes/Routes.routes";
import Layout from "../../components/layout/Layout";
import {   Descriptions, Divider, Modal, Space } from "antd";
import CustomButton from "../../assets/common/custom/CustomButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ErrorMessage from "../../components/err/ErrorMessage";
import { isErrorWithMessage } from "../../errors/isrErrorWithMessage";

const Employee: React.FC = () => {
  //-----------------------------
  const navigate = useNavigate();
  const [error, setError] = React.useState<string>("");
  const params = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [removeEmployee] = useRemoveEmployeeMutation();
  const user = useAppSelector((state) => state.auth.user);
  //-----------------------------
  //-----------------------------
  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteEmployee = async () => {
    hideModal();
    try {
      await removeEmployee(data?.id || "").unwrap();
      navigate(`${ROUTES.status}/deleted`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);
      if (maybeError) {
        setError(err.data.message);
      } else {
        setError(UNKNOWN_ERROR);
      }
    }
  };

  //-----------------------------

  if (isLoading) {
    return <span>{LOADING}</span>;
  }
  if (!data) {
    return <Navigate to={ROUTES.home} />;
  }
  return (
    <Layout>
      <div className={styles.holder}>
        <Descriptions title={E_INFO} bordered>
          <Descriptions.Item
            label={NAME}
            span={3}
          >{`${data.firstName} ${data.lastName}`}</Descriptions.Item>
          <Descriptions.Item label={AGE} span={3}>
            {data.age}
          </Descriptions.Item>
          <Descriptions.Item label={ADDRESS} span={3}>
            {data.address}
          </Descriptions.Item>
        </Descriptions>
        {user?.id === data.userId && (
          <>
            <Divider orientation="left">{ACTIONS}</Divider>
            <Space>
              <Link to={`${ROUTES.employee}/edit/${data.id}`}>
                <CustomButton
                  shape="round"
                  type="default"
                  icon={<EditOutlined />}
                >
                  {EDIT}
                </CustomButton>
              </Link>

              <CustomButton
                shape="round"
                danger
                onClick={showModal}
                icon={<DeleteOutlined />}
              >
                {DELETE}
              </CustomButton>
            </Space>
          </>
        )}
      </div>
      <ErrorMessage message={error} />
      <Modal
        title={C_D}
        open={isModalOpen}
        onOk={handleDeleteEmployee}
        onCancel={hideModal}
        okText={CONFIRM}
        cancelText={CANCEL}
        className={styles.customModal}
        footer={(_, { OkBtn, CancelBtn }) => (
          <div className={styles.footerModal}>
            <CancelBtn />
            <OkBtn />
          </div>
        )}
      >
        {A_Y_S_Y_W_T_D}
      </Modal>
    </Layout>
  );
};

export default Employee;
