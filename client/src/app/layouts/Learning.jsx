import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
import { toggleClassName } from "../utils/disabled";
import { observer } from "mobx-react-lite";
const Learning = observer(() => {
  const linksMenu = [
    { title: "Курсантам", path: "cadets" },
    {
      title: "Заочникам",
      path: "correspondenceStudents",
    },
    {
      title: "Родителям",
      path: "parents",
    },
    {
      title: "Практическая подготовка",
      path: "practice",
    },
    {
      title: "Служба трудоустройства",
      path: "employmentService",
    },
  ];
  return (
    <div className={` ${toggleClassName("_container-main min-height", "_container-white min-height-white"," _container-black min-height-black","_container-contrast min-height-contrast",)}`}>
      <BreadCrumbs />
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksMenu} />
      </div>
      <div
        className={toggleClassName(
          "education__container",
          "education__container-white",
          "education__container-black",
          "education__container-contrast"
        )}
      >
        <Outlet />
      </div>
    </div>
  );
});
export default Learning;
