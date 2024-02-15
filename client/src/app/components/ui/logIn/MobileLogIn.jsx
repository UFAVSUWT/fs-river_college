import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField/TextField";
import Button from "../../common/button/Button";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { ReactComponent as Key } from "../../../assets/svg/key.svg";
import { ReactComponent as Vector } from "../../../assets/svg/Vector.svg";
import { ReactComponent as Back } from "../../../assets/svg/form/back.svg";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import {
  toggleIconColor,
  toggleIconHeightSize,
  toggleIconWidthSize,
} from "../../../utils/disabled";
import { Context } from "../../../../index";
import { logOut } from "../../../utils/utils";
const MobileLogIn = observer(({ isActive, setIsActive, setNav }) => {
  const { user } = useContext(Context);
  const formRef = useRef(null);
  console.log(formRef);
  const navigate = useNavigate();
  const [data, setData] = useState({ login: "", password: "" });
  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    user.login(data, goToAuth);
    if (!user.isLoading) formRef.current.reset();
  };
  const handleReset = () => {
    setData({ login: "", password: "" });
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });
  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsActive(false);
    }
  };
  const getModalWindow = (e) => {
    if (
      e.target.id === "loginModalWindow" ||
      e.target.id === "loginModalWindow_wrapper"
    ) {
      setIsActive(false);
    }
  };
  const goToMain = () => {
    setIsActive(false);
    setNav(false);
    navigate("/");
  };
  const goToAuth = () => {
    setIsActive(false);
    setNav(false);
    navigate("/auth");
  };
  console.log(user.user);
  console.log(user.isAuth);
  return (
    <div
      className={`mobileLoggin  + ${isActive ? "mobileLoggin-isActive" : ""}`}
    >
      <section onClick={(e) => getModalWindow(e)}>
        <div className="mobileLoggin_navContainer">
          <Button onClick={() => goToMain()}>
            <Back
              width={toggleIconWidthSize("25px", "27px", "27px", "30px")}
              height={toggleIconHeightSize("25px", "27px", "27px", "30px")}
            />
          </Button>

          <Button onClick={() => setIsActive(false)}>
            <Vector
              width={toggleIconWidthSize("25px", "27px", "27px", "30px")}
              height={toggleIconHeightSize("25px", "27px", "27px", "30px")}
              stroke={toggleIconColor("#fff")}
            />
          </Button>
        </div>
        {user.user.role === "ADMIN" ? (
          <>
            <Button className={"navigate-button"} onClick={() => goToAuth()}>
              Личный кабинет
            </Button>
            <Button
              className={"navigate-button"}
              onClick={() => logOut(user, navigate)}
            >
              Выйти
            </Button>
          </>
        ) : (
          <>
            <h1>Авторизация</h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onReset={handleReset}
              onChange={handleChange}
            >
              <div className="login_form-inputWrapper">
                <User
                  width={toggleIconWidthSize("25px", "27px", "27px", "30px")}
                  height={toggleIconHeightSize("25px", "27px", "27px", "30px")}
                  fill={toggleIconColor("#fff")}
                />
                <TextField
                  inputClassName={"login_form-inputWrapper-input"}
                  value={data.login}
                  name={"login"}
                  type={"text"}
                  placeholder={"Введите ваш логин"}
                />
              </div>
              <div className="login_form-inputWrapper">
                <Key
                  width={toggleIconWidthSize("25px", "27px", "27px", "30px")}
                  height={toggleIconHeightSize("25px", "27px", "27px", "30px")}
                  fill={toggleIconColor("#fff")}
                />
                <TextField
                  inputClassName={"login_form-inputWrapper-input"}
                  value={data.password}
                  name={"password"}
                  type={"password"}
                  placeholder={"Введите ваш пароль"}
                />
              </div>
              <Button
                className={"mobileLoggin_btn"}
                text="Войти"
                type="submit"
              />
              <div className="message error">{user.error}</div>
              <div className="message ">{user.isLoading && "Загрузка"}</div>
            </form>{" "}
          </>
        )}
      </section>
    </div>
  );
});
MobileLogIn.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};
export default MobileLogIn;
