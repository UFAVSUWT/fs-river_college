import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { toggleClassName } from "../../../utils/disabled";
import PhoneMenu from "../../common/phoneMenu/PhoneMenu";
const NavBar = observer(() => {
  const [isMegaMenu, setIsMegaMenu] = useState(false); //переменная для отображения контента контейнера меню, когда мышка на элементе меню
  const [isElementOfMenu, setIsElementOfMenu] = useState(""); // дублирующая переменная для отображения контента в контейнере меню, когда курсор находится на самом контейнере
  const [isMegaMenuContainerIsActive, setIsMegaMenuContainerIsActive] =
    useState(false); // переменная для отображения самого контейнера
  /* Открываем меню при наведении на элементы главного списка */
  const onMouseEnter = (event) => {
    setIsMegaMenuContainerIsActive(true);
    if (event.target.innerHTML === "Главная") {
      setIsMegaMenu("main");
      setIsElementOfMenu("main");
    } else if (event.target.innerHTML === "Образование") {
      setIsMegaMenu("education");
      setIsElementOfMenu("education");
    } else if (event.target.innerHTML === "Абитуриенту") {
      setIsMegaMenu("enrolle");
      setIsElementOfMenu("enrolle");
    } else if (event.target.innerHTML === "Дополнительное образование") {
      setIsMegaMenu("additional");
      setIsElementOfMenu("additional");
    } else if (event.target.innerHTML === "Студенческая жизнь") {
      setIsMegaMenu("live");
      setIsElementOfMenu("live");
    } else if (event.target.innerHTML === "Контакты") {
      setIsMegaMenu("contacts");
      setIsElementOfMenu("contacts");
    }
  };
  /* закрываем меню при уходе курсора с элемента списка */
  const onMouseOut = (event) => {
    setIsMegaMenu(false);
  };
  const megaMenuIsActive = (e) => {
    setIsMegaMenu(isElementOfMenu);
  };
  const megaMenuIsOut = () => {
    setIsMegaMenu(false);
    setIsElementOfMenu("");
  };
  const prevScrollY = window.scrollY || document.documentElement.scrollTop;
  // eslint-disable-next-line no-unused-vars
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  window.onscroll = function () {
    let currentScrollY = window.scrollY;
    if (prevScrollY > currentScrollY) {
      document.getElementById("navBar").style.top = "0";
    } else {
      document.getElementById("navBar").style.top = "-10vh";
    }
  };
  return (
    <>
      <div id="navBar" className="app__wrapper-navBar">
        <header
          className={`header ${toggleClassName(
            "header",
            "header-white",
            "header-black",
            "header-contrast"
          )}`}
        >
          <div className="header-title">
            <NavLink to={"/"}>
              Уфимский филиал ФГБОУ ВО <br /> "Волжский государственный
              университет <br />
              водного транспорта"
            </NavLink>
          </div>
          <div className="header-menu">
            <ul>
              <li
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseOut={(e) => onMouseOut(e)}
                className={`${isMegaMenu === "main" ? "show-menu-list" : ""}`}
              >
                Главная
              </li>
              <li
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseOut={(e) => onMouseOut(e)}
                className={`${
                  isMegaMenu === "education" ? "show-menu-list" : ""
                }`}
              >
                Образование
              </li>
              <li
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseOut={(e) => onMouseOut(e)}
                className={`${
                  isMegaMenu === "enrolle" ? "show-menu-list" : ""
                }`}
              >
                Абитуриенту
              </li>
              <li
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseOut={(e) => onMouseOut(e)}
                className={`${
                  isMegaMenu === "additional" ? "show-menu-list" : ""
                }`}
              >
                Дополнительное образование
              </li>
              <li
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseOut={(e) => onMouseOut(e)}
                className={`${isMegaMenu === "live" ? "show-menu-list" : ""}`}
              >
                Студенческая жизнь
              </li>
              <li
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseOut={(e) => onMouseOut(e)}
                className={`${
                  isMegaMenu === "contacts" ? "show-menu-list" : ""
                }`}
              >
                Контакты
              </li>
            </ul>
          </div>

          <div
            onMouseEnter={(e) => megaMenuIsActive(e)}
            onMouseLeave={(e) => megaMenuIsOut(e)}
            className={`navbar__menu-container ${toggleClassName(
              "navbar__menu-container",
              "navbar__menu-container-white",
              "navbar__menu-container-black",
              "navbar__menu-container-contrast"
            )} ${isMegaMenuContainerIsActive ? "show-menu-container" : ""}`}
          >
            <div
              className={`navbar__menu-item ${toggleClassName(
                "navbar__menu-item",
                "navbar__menu-item-white",
                "navbar__menu-item-black",
                "navbar__menu-item-contrast"
              )} ${isMegaMenu === "main" ? "show-menu-item" : ""}`}
            >
              <ul onClick={() => megaMenuIsOut()}>
                <NavLink onClick={() => megaMenuIsOut()} to={""}>
                  <li>Главная</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"home/aboutBranch"}
                >
                  <li>О филиале</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"home/historicalReference"}
                >
                  <li>Историческая справка</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"home/univercityNews"}
                >
                  <li>Новости</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"home/univercityEvents"}
                >
                  <li>План мероприятий</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"home/stateForPeople"}
                >
                  <li>Государство для людей</li>
                </NavLink>
                <NavLink onClick={() => megaMenuIsOut()} to={"sveden/common"}>
                  <li>Сведения об образовательной организации</li>
                </NavLink>
              </ul>
            </div>
            <div
              className={`navbar__menu-item ${toggleClassName(
                "navbar__menu-item",
                "navbar__menu-item-white",
                "navbar__menu-item-black",
                "navbar__menu-item-contrast"
              )} ${isMegaMenu === "education" ? "show-menu-item" : ""}`}
            >
              <ul>
                <NavLink onClick={() => megaMenuIsOut()} to={"learning/cadets"}>
                  <li>Курсантам</li>
                </NavLink>

                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"learning/correspondenceStudents"}
                >
                  <li>Заочникам</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"learning/parents"}
                >
                  <li>Родителям</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"learning/practice"}
                >
                  <li>Практическая подготовка</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"learning/employmentService"}
                >
                  <li>Служба трудоустройства</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"learning/educationsPlatforms"}
                >
                  <li>
                    Сторонние электронные образовательные и информационные
                    ресурсы
                  </li>
                </NavLink>
              </ul>
            </div>
            <div
              className={`navbar__menu-item ${toggleClassName(
                "navbar__menu-item",
                "navbar__menu-item-white",
                "navbar__menu-item-black",
                "navbar__menu-item-contrast"
              )} ${isMegaMenu === "enrolle" ? "show-menu-item" : ""}`}
            >
              <ul>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"enrollee/reception"}
                >
                  <li>Приёмная кампания 2024</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"enrollee/submissionDoc"}
                >
                  <li>Подача документов</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"enrollee/passingScores"}
                >
                  <li>Проходные баллы прошлых лет</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"enrollee/messageFromDirector"}
                >
                  <li>Обращение директора</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"enrollee/monitoring"}
                >
                  <li>Мониторинг подачи документов</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"enrollee/applicantsInfo"}
                >
                  <li>Узнать как стать нашим курсантом</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"enrollee/open-day"}
                >
                  <li>Дни открытых дверей</li>
                </NavLink>
              </ul>
            </div>
            <div
              className={`navbar__menu-item ${toggleClassName(
                "navbar__menu-item",
                "navbar__menu-item-white",
                "navbar__menu-item-black",
                "navbar__menu-item-contrast"
              )} ${isMegaMenu === "additional" ? "show-menu-item" : ""}`}
            >
              <ul>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"training/aboutCdo"}
                >
                  <li>
                    О центре конвенционной подготовки и дополнительного
                    образования
                  </li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"training/advancedTraining"}
                >
                  <li>Программы повышения квалификации</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"training/distanceLearning"}
                >
                  <li>Дистанционное обучение</li>
                </NavLink>
              </ul>
            </div>
            <div
              className={`navbar__menu-item ${toggleClassName(
                "navbar__menu-item",
                "navbar__menu-item-white",
                "navbar__menu-item-black",
                "navbar__menu-item-contrast"
              )} ${isMegaMenu === "live" ? "show-menu-item" : ""}`}
            >
              <ul>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"home/univercityNews"}
                >
                  <li>Новости</li>
                </NavLink>
                <NavLink
                  onClick={() => megaMenuIsOut()}
                  to={"home/univercityEvents"}
                >
                  <li>Мероприятия</li>
                </NavLink>
                <NavLink onClick={() => megaMenuIsOut()} to={"live/ourPride"}>
                  <li>Наша гордость</li>
                </NavLink>
              </ul>
            </div>
            <div
              className={`navbar__menu-item ${toggleClassName(
                "navbar__menu-item",
                "navbar__menu-item-white",
                "navbar__menu-item-black",
                "navbar__menu-item-contrast"
              )} ${isMegaMenu === "contacts" ? "show-menu-item" : ""}`}
            >
              <ul>
                <NavLink onClick={() => megaMenuIsOut()} to={"home/reviews"}>
                  <li>Отзывы и обратная связь</li>
                </NavLink>
                <NavLink onClick={() => megaMenuIsOut()} to={"home/userSurvey"}>
                  <li>Анкетирование получателей услуг</li>
                </NavLink>
                <NavLink onClick={() => megaMenuIsOut()} to={"home/contacts"}>
                  <li>Контакты</li>
                </NavLink>
                <NavLink onClick={() => megaMenuIsOut()} to={"live/vacancies"}>
                  <li>Вакансии</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <PhoneMenu />
    </>
  );
});
export default NavBar;
