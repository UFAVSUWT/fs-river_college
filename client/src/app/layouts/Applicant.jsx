import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import { toggleClassName } from "../utils/disabled";
import { observer } from "mobx-react-lite";
const Applicant = observer(() => {
  return (
    <div className={` ${toggleClassName("_container-main min-height", "_container-white min-height-white"," _container-black min-height-black","_container-contrast min-height-contrast",)}`}>
      <BreadCrumbs />
      <Outlet />
    </div>
  );
});
export default Applicant;
