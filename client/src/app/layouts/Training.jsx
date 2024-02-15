import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
import { toggleClassName } from "../utils/disabled";
import { observer } from "mobx-react-lite";
const Training = observer(() => {
  const linksMenu = [
    {
      title: "О центре конвенционной подготовки и доп. образования",
      path: "aboutCdo",
    },
    {
      title: "Программы повышения квалификации членов экипажей",
      path: "advancedTraining",
    },
    {
      title: "Дистанционное обучение",
      path: "distanceLearning",
    },
  ];
  return (
    <div
      className={`sveden__container ${toggleClassName(
        "_container",
        "_container-white",
        "_container-black",
        "_container-contrast"
      )} background-blue`}
    >
      <div className={` ${toggleClassName("min-height", "min-height-white","min-height-black","min-height-contrast",)}`}>
        <BreadCrumbs />
        <div className="chapter__menu-show">
          <ChapterMenu linksArray={linksMenu} />
        </div>
        <Outlet />
      </div>
    </div>
  );
});
export default Training;
