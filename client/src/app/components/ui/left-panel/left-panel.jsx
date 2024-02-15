import React, { useContext, useState } from "react";
import { ReactComponent as Logo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as User } from "../../../assets/svg/leftPanel/user.svg";
import { ReactComponent as Glasses } from "../../../assets/svg/leftPanel/glasses.svg";
import { ReactComponent as Museum } from "../../../assets/svg/leftPanel/museum.svg";
import { ReactComponent as Calendar } from "../../../assets/svg/leftPanel/calendar.svg";
import { ReactComponent as User1 } from "../../../assets/svg/leftPanel/user1.svg";
import { ReactComponent as Glasses1 } from "../../../assets/svg/leftPanel/glasses1.svg";
import { ReactComponent as Museum1 } from "../../../assets/svg/leftPanel/museum1.svg";
import { ReactComponent as Calendar1 } from "../../../assets/svg/leftPanel/calendar1.svg";
import { toggleClassName, toggleIconColor } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import Disabled from "../disabled/disabled-panel";
import DesktopLogIn from "../logIn/desktopLogIn";
import AuthLeftPanel from "../../../layouts/auth/auth-left-panel";
import { Context } from "../../../../index";

const LeftPanel = observer(() => {
  const [isMegaMenu, setIsMegaMenu] = useState(false); //переменная для отображения контента контейнера меню, когда мышка на элементе меню
  /* Открываем меню при наведении на элементы главного списка */
  const onMouseEnter = (event) => {
    setIsMegaMenu(true);
  };
  const onMouseOut = (event) => {
    setIsMegaMenu(false);
  };
  const megaMenuIsActive = (e) => {
    setIsMegaMenu(true);
  };
  const megaMenuIsOut = () => {
    setIsMegaMenu(false);
  };

  const [isLinks, setIsLinks] = useState("");
  /* --------здесь реализована логика  */
  const onIconEnter = (event) => {
    /*     console.log(event.target.id); */
    let id = event.target.id;
    if (id === "User" || id === "User1" || id === "User_link") {
      setIsLinks("User");
    } else if (
      id === "Calendar" ||
      id === "Calendar1" ||
      id === "Calendar_link"
    ) {
      setIsLinks("Calendar");
    } else if (id === "Museum" || id === "Museum1" || id === "Museum_link") {
      setIsLinks("Museum");
    } else if (id === "Glasses" || id === "Glasses1" || id === "Glasses_link") {
      setIsLinks("Glasses");
    }
  };
  const onIconOut = (e) => {
    setIsLinks("");
  };
  const toggleIsHidden = () => {
    setIsMegaMenu(false);
  };
  /* ---------------версия для слабовидящих------------------- */
  const [isDisabled, setIsDisabled] = useState(false);
  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
    /*  if (isDisabled) {
      fontSize.medium();
      theme.black();
      images.off();
    } else {
      handleThemeMain();
    } */
  };
  /* переменная отвечает за отображения формы входа в левой панели */
  const [isLogIn, setIsLogin] = useState(false);
  /* проверка пользователя на авторизацию */
  const { user } = useContext(Context);
  const isAuth = user.auth;
  return (
    <div
      className={`leftPanel__wrapper ${toggleClassName(
        "leftPanel__wrapper",
        "leftPanel__wrapper-white",
        "leftPanel__wrapper-black",
        "leftPanel__wrapper-contrast"
      )}`}
    >
      <div
        onMouseEnter={(e) => megaMenuIsActive(e)}
        onMouseLeave={(e) => megaMenuIsOut(e)}
        className={`leftPanel__wrapper-moove ${isMegaMenu ? "isShow" : ""}`}
      >
        {isDisabled ? (
          <div
            className={`leftPanel__wrapper-moove-disabled ${
              isDisabled ? "leftPanel__wrapper-moove-disabled-show" : ""
            }`}
          >
            <div
              className="leftPanel__wrapper-moove-disabled-back"
              onClick={() => toggleDisabled()}
            >
              <div>Закрыть</div>
            </div>
            <Disabled />
          </div>
        ) : null}
        {isAuth && isLogIn ? (
          <AuthLeftPanel isActive={isLogIn} />
        ) : (
          <DesktopLogIn
            isActive={isLogIn}
            setIsActive={setIsLogin}
            user={user}
          />
        )}

        <div className="leftPanel__wrapper-moove-top">
          <div> Стань капитаном своей судьбы!</div>
        </div>
        <div className="leftPanel__wrapper-moove-links">
          <div
            onMouseLeave={(e) => onIconOut(e)}
            onMouseEnter={(e) => onIconEnter(e)}
            onClick={() => setIsLogin(!isLogIn)}
            id="User_link"
            className={`links__container ${
              isLinks === "User" ? "links__container-active" : ""
            }`}
          >
            {isAuth ? (
              <NavLink to={"auth"}>Личный кабинет</NavLink>
            ) : (
              <NavLink to={""}>Личный кабинет</NavLink>
            )}
          </div>
          <NavLink to={"schedule"}>
            <div
              onMouseLeave={(e) => onIconOut(e)}
              onMouseEnter={(e) => onIconEnter(e)}
              onClick={() => toggleIsHidden()}
              id="Calendar_link"
              className={`links__container ${
                isLinks === "Calendar" ? "links__container-active" : ""
              }`}
            >
              Расписание занятий
            </div>
          </NavLink>
          <NavLink to={"sveden/common"}>
            <div
              onMouseLeave={(e) => onIconOut(e)}
              onMouseEnter={(e) => onIconEnter(e)}
              onClick={() => toggleIsHidden()}
              id="Museum_link"
              className={`links__container ${
                isLinks === "Museum" ? "links__container-active" : ""
              }`}
            >
              Сведения об образовательной организации
            </div>
          </NavLink>
          <div
            onMouseLeave={(e) => onIconOut(e)}
            onMouseEnter={(e) => onIconEnter(e)}
            onClick={() => toggleDisabled()}
            id="Glasses_link"
            className={`links__container ${
              isLinks === "Glasses" ? "links__container-active" : ""
            }`}
          >
            Версия для слабовидящих
          </div>
        </div>
      </div>
      <div
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseLeave={(e) => onMouseOut(e)}
        className="leftPanel__wrapper-static"
      >
        <div className="leftPanel__wrapper-static-top">
          <NavLink to="/">
            <div>
              <Logo
                fill={toggleIconColor("#0C1C2B", "", "#000")}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </NavLink>
        </div>
        <div className="leftPanel__wrapper-static-icons">
          <div onClick={() => setIsLogin(!isLogIn)} className="icon__container">
            {isAuth ? (
              <NavLink to="auth">
                {" "}
                {isLinks === "User" ? (
                  <User
                    onMouseLeave={(e) => onIconOut(e)}
                    onMouseEnter={(e) => onIconEnter(e)}
                    id="User"
                    width={"100%"}
                    height={"100%"}
                  />
                ) : (
                  <User1
                    onMouseEnter={(e) => onIconEnter(e)}
                    onMouseLeave={(e) => onIconOut(e)}
                    id="User1"
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </NavLink>
            ) : (
              <NavLink to="">
                {" "}
                {isLinks === "User" ? (
                  <User
                    onMouseLeave={(e) => onIconOut(e)}
                    onMouseEnter={(e) => onIconEnter(e)}
                    id="User"
                    width={"100%"}
                    height={"100%"}
                  />
                ) : (
                  <User1
                    onMouseEnter={(e) => onIconEnter(e)}
                    onMouseLeave={(e) => onIconOut(e)}
                    id="User1"
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </NavLink>
            )}
          </div>
          <div onClick={() => toggleIsHidden()} className="icon__container">
            <NavLink to="schedule">
              {isLinks === "Calendar" ? (
                <Calendar
                  onMouseLeave={(e) => onIconOut(e)}
                  onMouseEnter={(e) => onIconEnter(e)}
                  id="Calendar"
                  width={"100%"}
                  height={"100%"}
                />
              ) : (
                <Calendar1
                  onMouseEnter={(e) => onIconEnter(e)}
                  onMouseLeave={(e) => onIconOut(e)}
                  id="Calendar1"
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </NavLink>
          </div>
          <div
            onClick={() => toggleIsHidden()}
            id="Museum"
            className="icon__container"
          >
            <NavLink to="sveden/common">
              {isLinks === "Museum" ? (
                <Museum
                  onMouseLeave={(e) => onIconOut(e)}
                  onMouseEnter={(e) => onIconEnter(e)}
                  id="Museum"
                  width={"100%"}
                  height={"100%"}
                />
              ) : (
                <Museum1
                  onMouseEnter={(e) => onIconEnter(e)}
                  onMouseLeave={(e) => onIconOut(e)}
                  id="Museum1"
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </NavLink>
          </div>
          <div
            onClick={() => toggleDisabled()}
            id="Glasses"
            className="icon__container"
          >
            {isLinks === "Glasses" ? (
              <Glasses
                onMouseLeave={(e) => onIconOut(e)}
                onMouseEnter={(e) => onIconEnter(e)}
                id="Glasses"
                width={"100%"}
                height={"100%"}
              />
            ) : (
              <Glasses1
                onMouseEnter={(e) => onIconEnter(e)}
                onMouseLeave={(e) => onIconOut(e)}
                id="Glasses1"
                width={"100%"}
                height={"100%"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
    /*  <div
      className={`leftPanel__wrapper ${toggleClassName(
        "leftPanel__wrapper",
        "leftPanel__wrapper-white",
        "leftPanel__wrapper-black",
        "leftPanel__wrapper-contrast"
      )}`}
    >
      <div
        onMouseEnter={(e) => megaMenuIsActive(e)}
        onMouseLeave={(e) => megaMenuIsOut(e)}
        className={`leftPanel__wrapper-moove ${isMegaMenu ? "isShow" : ""}`}
      >
        {isDisabled ? (
          <div
            className={`leftPanel__wrapper-moove-disabled ${
              isDisabled ? "leftPanel__wrapper-moove-disabled-show" : ""
            }`}
          >
            <div
              className="leftPanel__wrapper-moove-disabled-back"
              onClick={() => toggleDisabled()}
            >
              <div>Закрыть</div>
            </div>
            <Disabled />
          </div>
        ) : null}
        {isAuth && isLogIn ? (
          <AuthLeftPanel isActive={isLogIn} />
        ) : (
          <DesktopLogIn
            isActive={isLogIn}
            setIsActive={setIsLogin}
            user={user}
          />
        )}

        <div className="leftPanel__wrapper-moove-top">
          <div> Стань капитаном своей судьбы!</div>
        </div>
        <div className="leftPanel__wrapper-moove-links">
          <div
            onMouseLeave={(e) => onIconOut(e)}
            onMouseEnter={(e) => onIconEnter(e)}
            onClick={() => setIsLogin(!isLogIn)}
            id="User_link"
            className={`links__container ${
              isLinks === "User" ? "links__container-active" : ""
            }`}
          >
            {isAuth ? (
              <NavLink to={"auth"}>Личный кабинет</NavLink>
            ) : (
              <NavLink to={""}>Личный кабинет</NavLink>
            )}
          </div>
          <NavLink to={"schedule"}>
            <div
              onMouseLeave={(e) => onIconOut(e)}
              onMouseEnter={(e) => onIconEnter(e)}
              onClick={() => toggleIsHidden()}
              id="Calendar_link"
              className={`links__container ${
                isLinks === "Calendar" ? "links__container-active" : ""
              }`}
            >
              Расписание занятий
            </div>
          </NavLink>
          <NavLink to={"sveden/common"}>
            <div
              onMouseLeave={(e) => onIconOut(e)}
              onMouseEnter={(e) => onIconEnter(e)}
              onClick={() => toggleIsHidden()}
              id="Museum_link"
              className={`links__container ${
                isLinks === "Museum" ? "links__container-active" : ""
              }`}
            >
              Сведения об образовательной организации
            </div>
          </NavLink>
          <div
            onMouseLeave={(e) => onIconOut(e)}
            onMouseEnter={(e) => onIconEnter(e)}
            onClick={() => toggleDisabled()}
            id="Glasses_link"
            className={`links__container ${
              isLinks === "Glasses" ? "links__container-active" : ""
            }`}
          >
            Версия для слабовидящих
          </div>
        </div>
      </div>
      <div
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseLeave={(e) => onMouseOut(e)}
        className="leftPanel__wrapper-static"
      >
        <div className="leftPanel__wrapper-static-top">
          <NavLink to="/">
            <div>
              <Logo
                fill={toggleIconColor("#0C1C2B", "", "#000")}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </NavLink>
        </div>
        <div className="leftPanel__wrapper-static-icons">
          <div onClick={() => setIsLogin(!isLogIn)} className="icon__container">
            {isAuth ? (
              <NavLink to="auth">
                {" "}
                {isLinks === "User" ? (
                  <User
                    onMouseLeave={(e) => onIconOut(e)}
                    onMouseEnter={(e) => onIconEnter(e)}
                    id="User"
                    width={"100%"}
                    height={"100%"}
                  />
                ) : (
                  <User1
                    onMouseEnter={(e) => onIconEnter(e)}
                    onMouseLeave={(e) => onIconOut(e)}
                    id="User1"
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </NavLink>
            ) : (
              <NavLink to="">
                {" "}
                {isLinks === "User" ? (
                  <User
                    onMouseLeave={(e) => onIconOut(e)}
                    onMouseEnter={(e) => onIconEnter(e)}
                    id="User"
                    width={"100%"}
                    height={"100%"}
                  />
                ) : (
                  <User1
                    onMouseEnter={(e) => onIconEnter(e)}
                    onMouseLeave={(e) => onIconOut(e)}
                    id="User1"
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </NavLink>
            )}
          </div>
          <div onClick={() => toggleIsHidden()} className="icon__container">
            <NavLink to="schedule">
              {isLinks === "Calendar" ? (
                <Calendar
                  onMouseLeave={(e) => onIconOut(e)}
                  onMouseEnter={(e) => onIconEnter(e)}
                  id="Calendar"
                  width={"100%"}
                  height={"100%"}
                />
              ) : (
                <Calendar1
                  onMouseEnter={(e) => onIconEnter(e)}
                  onMouseLeave={(e) => onIconOut(e)}
                  id="Calendar1"
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </NavLink>
          </div>
          <div
            onClick={() => toggleIsHidden()}
            id="Museum"
            className="icon__container"
          >
            <NavLink to="sveden/common">
              {isLinks === "Museum" ? (
                <Museum
                  onMouseLeave={(e) => onIconOut(e)}
                  onMouseEnter={(e) => onIconEnter(e)}
                  id="Museum"
                  width={"100%"}
                  height={"100%"}
                />
              ) : (
                <Museum1
                  onMouseEnter={(e) => onIconEnter(e)}
                  onMouseLeave={(e) => onIconOut(e)}
                  id="Museum1"
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </NavLink>
          </div>
          <div
            onClick={() => toggleDisabled()}
            id="Glasses"
            className="icon__container"
          >
            {isLinks === "Glasses" ? (
              <Glasses
                onMouseLeave={(e) => onIconOut(e)}
                onMouseEnter={(e) => onIconEnter(e)}
                id="Glasses"
                width={"100%"}
                height={"100%"}
              />
            ) : (
              <Glasses1
                onMouseEnter={(e) => onIconEnter(e)}
                onMouseLeave={(e) => onIconOut(e)}
                id="Glasses1"
                width={"100%"}
                height={"100%"}
              />
            )}
          </div>
        </div>
      </div>
    </div> */
  );
});
export default LeftPanel;
