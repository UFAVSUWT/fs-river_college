import React from "react";
import { Outlet } from "react-router";
import Port from "../../../../assets/img/education/port.jpg";
import Image from "../../../common/image/Image";
import ChapterMenu from "../../../ui/chapterMenu/ChapterMenu";
import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
const EmploymentService = observer(() => {
  const linksMenu = [
    { title: "О службе трудоустройства выпускников", path: "" },
    {
      title:
        "Вопросы и ответы по организации практики и трудоустройства выпускников",
      path: "faq",
    },
    {
      title: "Профильные организации - социальные партнеры филиала",
      path: "partners",
    },
    { title: "Вакансии от работодателей", path: "vacanciesFrom" },
  ];

  return (
    <div
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <h1 className="education__container-title">
        Служба трудоустройства выпускников Уфимского филиала ФГБОУ ВО «ВГУВТ»
      </h1>
      <div className="education__container-image">
        <Image src={Port} width={"100%"} height={"400px"} />
      </div>
      <div className="education__container-navigate">
        <ChapterMenu title={"Навигация раздела"} linksArray={linksMenu} />
      </div>
      <div className="education__container-content">
        <Outlet />
      </div>
    </div>
  );
});
export default EmploymentService;
