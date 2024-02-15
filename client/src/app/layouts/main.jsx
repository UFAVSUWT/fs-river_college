import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import ImageSlider from "../components/common/carousel/ImageSlider";
import LiveCardContainer from "../components/common/liveCardContainer/LiveCardContainer";
import ApplicantsPage from "../components/page/infoContainer/applicantsPage/ApplicantsPage";
/* import EventsPages from "../components/page/infoContainer/eventsPages/EventsPages";

import SecurityPage from "../components/page/infoContainer/securityPage/SecurityPage"; */
import InfoPage from "../components/page/infoContainer/infoPage/InfoPage";
import NewsNavbar from "../components/ui/newsNavbar/NewsNavbar";
import PartnersContainer from "../components/ui/partners-container/partners-container";
import { toggleClassName } from "../utils/disabled";
import HrLine from "../components/common/hrLine/HrLine";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";

const Main = observer(() => {
  const [mainComponents, setMainComponents] = useState("news");

  const linksArray = [
    { title: "Главная", path: "/" },
    { title: "О филиале", path: "/home/aboutBranch" },
    { title: "Историческая справка", path: "/home/historicalReference" },
    { title: "Новости", path: "/home/univercityNews" },
    { title: "План мероприятий", path: "/home/univercityEvents" },
    { title: "Интервью с выпускниками", path: "live/interview" },
    { title: "Государство для людей", path: "/home/stateForPeople" },
  ];

  return (
    <>
      <div className="main-mobileMenu">
        <ChapterMenu linksArray={linksArray} />
      </div>
      <ImageSlider />
      <div
        className={toggleClassName(
          "_container",
          "_container-white",
          "_container-black",
          "_container-contrast"
        )}
      >
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          Вниманию абитуриентов!
        </h1>
        <p style={{ textIndent: "25px" }}>
          Уфимский филиал ФГБОУ ВО «ВГУВТ» 15 февраля 2024 года в 14.30 часов
          проводит День открытых дверей. Приглашаем всех желающих.
        </p>
        <p style={{ textIndent: "25px" }}>
          Наш адрес: г.Уфа, Затон, ул. Ахметова, 275.
        </p>
        <p style={{ textIndent: "25px" }}>
          Проезд автобусами №№30,30 К, 107, 108, 112, марш. такси 248, 391 до
          ост. «Речное училище».
        </p>
        <p style={{ textIndent: "25px" }}>
          Тел.: 8 (347) 215-14-00 доп. (301, 302).
        </p>
      </div>
      <div
        className={toggleClassName(
          "_container",
          "_container-white",
          "_container-black",
          "_container-contrast"
        )}
      >
        <NewsNavbar
          mainComponents={mainComponents}
          setMainComponents={setMainComponents}
        />
      </div>
      <div>
        <div
          className={toggleClassName(
            "_container-main",
            "_container-white",
            "_container-black",
            "_container-contrast"
          )}
        >
          {mainComponents === "news" ? (
            <InfoPage />
          ) : mainComponents === "applicants" ? (
            <ApplicantsPage />
          ) : null}
          {/*     {params.element === "events" ? <EventsPages /> : null} */}
          {/*       {params.element === "security" ? <SecurityPage /> : null} */}
        </div>
      </div>
      <LiveCardContainer />
      <HrLine />
      <PartnersContainer />
    </>
  );
});
export default Main;
