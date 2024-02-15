import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

const Schedule = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className={"schedule-layout"}>
      <div className="schedule-layout-navBar">
        <Space size={"large"}>
          <Button
            className={pathname === "/schedule" ? "btn" : null}
            size="large"
            onClick={() => navigate("")}
          >
            СПО
          </Button>
          <Button
            className={pathname === "/schedule/vo" ? "btn" : null}
            size="large"
            onClick={() => navigate("vo")}
          >
            Высшее образование
          </Button>
        </Space>
      </div>
      <div className="schedule-layout-content">
        <Outlet />
      </div>
    </div>
  );
};
export default Schedule;
