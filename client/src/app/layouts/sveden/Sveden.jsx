import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../../components/common/breadCrumbs/BreadCrumbs";
import Menu from "../../components/ui/commonMenu/Menu";
import { toggleClassName, toggleFontSize } from "../../utils/disabled";
const Sveden = observer(() => {
  return (
    <>
      <div className="_container">
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
        <Menu />
        <div
          style={{
            fontSize: toggleFontSize(18),
          }}
          className="sveden__container-item"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
});
export default Sveden;
