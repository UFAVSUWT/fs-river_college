import React from "react";
import { Outlet } from "react-router";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
import { toggleClassName } from "../utils/disabled";
import { observer } from "mobx-react-lite";
const Home = observer(() => {
  const linksArray = [
    { title: "Главная", path: "/" },
    { title: "О филиале", path: "/home/aboutBranch" },
    { title: "Историческая справка", path: "/home/historicalReference" },
    { title: "Новости", path: "/home/univercityNews" },
    { title: "План мероприятий", path: "/home/univercityEvents" },
    { title: "Государство для людей", path: "/home/stateForPeople" },
    { title: "Интервью с выпускниками", path: "/live/interview" },
  ];
  return (
    <div
      className={` ${toggleClassName(
        "_container-main min-height",
        "_container-white min-height-white",
        " _container-black min-height-black",
        "_container-contrast min-height-contrast"
      )}`}
    >
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksArray} />
      </div>
      <Outlet />
    </div>
  );
});
export default Home;
