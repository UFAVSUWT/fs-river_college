import React from "react";
import { Outlet } from "react-router";
import { toggleClassName } from "../utils/disabled";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import { observer } from "mobx-react-lite";
const EducationPrograms = observer(() => {
  return (
    <>
      <div className="_container">
        {" "}
        <BreadCrumbs />
      </div>

      <div
        className={`sveden__container ${toggleClassName(
          "_container",
          "_container-white",
          "_container-black",
          "_container-contrast"
        )} background-blue`}
      >
        <div className="sveden__container-item">
          <Outlet />
        </div>
      </div>
    </>
  );
});
export default EducationPrograms;
