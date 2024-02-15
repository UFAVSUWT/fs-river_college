import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
import { toggleClassName } from "../utils/disabled";
import { observer } from "mobx-react-lite";
const Live = observer(() => {
  const linksArray = [
    {
      title: "Новости",
      path: "../home/univercityNews",
    },
    {
      title: "Мероприятия",
      path: "../home/univercityEvents",
    },
    { title: "Наша гордость", path: "ourPride" },
    { title: "Интервью с выпускниками", path: "interview" },
  ];
  return (
    <main
      className={` ${toggleClassName(
        "_container-main min-height",
        "_container-white min-height-white",
        " _container-black min-height-black",
        "_container-contrast min-height-contrast"
      )}`}
    >
      <BreadCrumbs />
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksArray} />
      </div>
      <Outlet />
    </main>
  );
});
export default Live;
