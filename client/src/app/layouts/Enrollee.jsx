import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
import { observer } from "mobx-react-lite";
import { toggleClassName } from "../utils/disabled";
const Enrolly = observer(() => {
  const linksMenu = [
    {
      title: "Приемная кампания 2024",
      path: "reception",
    },
    {
      title: "Прием по программам СПО",
      path: "spo",
    },
    {
      title: "Прием по программам ВО",
      path: "higherEducation",
    },
    {
      title: "Подача документов",
      path: "submissionDoc",
    },
    {
      title: "Проходные баллы прошлых лет",
      path: "passingScores",
    },
    {
      title: "Обращение директора",
      path: "messageFromDirector",
    },
    {
      title: "Мониторинг подачи документов",
      path: "monitoring",
    },
    {
      title: "Узнать как стать нашим курсантом",
      path: "applicantsInfo",
    },
    { title: "Дни открытых дверей", path: "open-day" },
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
        <div className="education__container-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
});
export default Enrolly;
