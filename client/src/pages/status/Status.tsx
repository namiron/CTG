import React from "react";
import { NOT_FOUND, Statuses, TO_MAIN } from "../../assets/common/vars";
import { Link, useParams } from "react-router-dom";
import { Button, Result, Row } from "antd";
import { ROUTES } from "../../routes/Routes.routes";

const Status: React.FC = () => {
  //---------------------
  const { status } = useParams();
  //---------------------

  return (
    <Row align="middle" justify="center" style={{ width: "100%" }}>
      <Result
        status={status ? `success` : 404}
        title={status ? Statuses[status] : NOT_FOUND}
        extra={
          <Button key="dashboard">
            <Link to={ROUTES.home}>{TO_MAIN}</Link>
          </Button>
        }
      ></Result>
    </Row>
  );
};

export default Status;
