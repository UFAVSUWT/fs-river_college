import React from "react";

import { observer } from "mobx-react-lite";
import { NavLink, Outlet } from "react-router-dom";
import EducationContainer from "../../common/educationContainer/education-container";
const AdminPanel = observer(() => {
  return (
    <EducationContainer
      title={"Панель администратора"}
      classes={"admin-wrapper"}
    >
      <div className="admin-wrapper-content">
        <div className="admin-wrapper-content-link">
          <NavLink to="editorNews">Редактор новостей</NavLink>
        </div>
        <Outlet />
      </div>
    </EducationContainer>
  );
});
export default AdminPanel;
