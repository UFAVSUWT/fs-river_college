import React, { useState } from "react";
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as MenuLogo } from "../../../assets/svg/menuLogo.svg";
import { ReactComponent as Burger } from "../../../assets/svg/burger.svg";
import { ReactComponent as Cross } from "../../../assets/svg/cross.svg";
import { ReactComponent as Schedul } from "../../../assets/svg/calendar.svg";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import {
  toggleIconColor,
  toggleIconHeightSize,
  toggleIconWidthSize,
} from "../../../utils/disabled";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import MobileLogIn from "../../ui/logIn/MobileLogIn";

const PhoneMenu = () => {
  const [nav, setNav] = useState(false);
  const [login, setLogin] = useState(false);
  /*   const [disabled, setDisabled] = useState(false); */
  return (
    <header className="phoneMenu">
      <div className="flex jcs w1 ">
        <div>
          <RiverUniversityLogo
            width="60px"
            height="60px"
            fill={toggleIconColor("#0C1C2B", "", "#000")}
          />
        </div>
        <div className="phoneMenu__title">
          <h1>
            Уфимский филиал <br /> ФГБОУ ВО “Волжский государственный <br />{" "}
            университет водного транспорта”
          </h1>
          <h3>
            {" "}
            Уфимский филиал <br /> ФГБОУ ВО “ВГУВТ”{" "}
          </h3>
        </div>
        <div>
          <Burger
            onClick={() => setNav(!nav)}
            stroke={toggleIconColor("#C80000")}
            width={toggleIconWidthSize("35px", "37px", "40px", "43px")}
            height={toggleIconHeightSize("35px", "37px", "40px", "43px")}
          />
        </div>
      </div>
      <nav className="phoneMenu__menu">
        <div className={`phoneMenu__menu-dropdown ${!nav ? "" : " is-open "} `}>
          <div onClick={() => setNav(!nav)} className="phoneMenu__menu-toggle">
            <Cross
              stroke={toggleIconColor("#C80000")}
              width={toggleIconWidthSize("35px", "37px", "40px", "43px")}
              height={toggleIconHeightSize("35px", "37px", "40px", "43px")}
            />
          </div>
          {/*  <ul className="nav-menu">
            <li
              onClick={() => setDisabled(!disabled)}
              className={`nav-menu-disabled ${!disabled ? "" : " is-open "}`}
            >
              Версия для слабовидящих
            </li>
          </ul> */}
          <div className="button__container">
            <NavLink to={"/schedule"}>
              <Button
                onClick={() => setNav(false)}
                className={"button__container-btn"}
              >
                {<Schedul className={"button__container-btn-icon"} />}
              </Button>
            </NavLink>
            <Button
              onClick={() => setLogin(true)}
              className={"button__container-btn"}
            >
              {<User className={"button__container-btn-icon"} />}
            </Button>
            <MobileLogIn
              isActive={login}
              setIsActive={setLogin}
              setNav={setNav}
            />
          </div>
          <MenuLogo className="menuLogo" />
          <ul className="nav-menu">
            <li onClick={() => setNav(!nav)}>
              <NavLink to="">Главная</NavLink>
            </li>
            <li onClick={() => setNav(!nav)}>
              <NavLink to="learning/practice">Образование</NavLink>
            </li>
            <li onClick={() => setNav(!nav)}>
              <NavLink to="enrollee/reception">Абитуриенту</NavLink>
            </li>
            <li onClick={() => setNav(!nav)}>
              <NavLink to="training/aboutCdo">
                Дополнительное образование
              </NavLink>
            </li>
            <li onClick={() => setNav(!nav)}>
              <NavLink to="live">Студенческая жизнь</NavLink>
            </li>
          </ul>
          <ul className="nav-menu">
            <li onClick={() => setNav(!nav)} className="nav-menu-sveden">
              <NavLink to="sveden/common">
                Сведения об образовательной организации
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default PhoneMenu;
