import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuNavbar = () => {
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
    console.log(event);
    setIsMegaMenu(false);
  };
  const megaMenuIsActive = (e) => {
    setIsMegaMenu(isElementOfMenu);
  };
  const megaMenuIsOut = () => {
    setIsMegaMenu(false);
    setIsElementOfMenu("");
  };
  /*   const toggleBackColor = () => {
    const currentTheme = theme.theme;
    if (currentTheme === "main") return "#0C1C2B";
    if (currentTheme === "white") return "white";
    if (currentTheme === "black") return "black";
    if (currentTheme === "contrast") return "#9dd1ff";
  };
  const toggleColor = () => {
    const currentTheme = theme.theme;
    if (currentTheme === "main") return "white";
    if (currentTheme === "white") return "black";
    if (currentTheme === "black") return "white";
    if (currentTheme === "contrast") return "#195183";
  }; */
  return (
    <>
      <nav>
        <div className="header__navbar"></div>
      </nav>
    </>
  );
};

export default MenuNavbar;
