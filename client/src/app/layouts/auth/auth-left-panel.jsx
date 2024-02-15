import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { logOut } from "../../utils/utils";
import { toggleClassName } from "../../utils/disabled.js";

const AuthLeftPanel = observer(({ isActive }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      {isActive ? (
        <div>
          <div
            className={toggleClassName(
              "auth-leftpanel-wrapper",
              "auth-leftpanel-wrapper auth-leftpanel-wrapper-white",
              "auth-leftpanel-wrapper auth-leftpanel-wrapper-black",
              "auth-leftpanel-wrapper auth-leftpanel-wrapper-contrast"
            )}
          >
            <Button onClick={() => navigate("../auth")}>Личный кабинет</Button>
            <Button onClick={() => navigate("admin")}>
              Панель администратора
            </Button>
            <Button onClick={() => logOut(user, navigate)}>Выйти</Button>
          </div>
        </div>
      ) : null}
    </>
  );
});
export default AuthLeftPanel;

/* import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { logOut } from "../../utils/utils";
import { toggleClassName } from "../../utils/disabled.js";

const AuthLeftPanel = observer(({ isActive }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      {isActive ? (
        <div>
          <div
            className={toggleClassName(
              "auth-leftpanel-wrapper",
              "auth-leftpanel-wrapper auth-leftpanel-wrapper-white",
              "auth-leftpanel-wrapper auth-leftpanel-wrapper-black",
              "auth-leftpanel-wrapper auth-leftpanel-wrapper-contrast"
            )}
          >
            <Button onClick={() => navigate("../auth")}>Личный кабинет</Button>
            <Button onClick={() => navigate("admin")}>
              Панель администратора
            </Button>
            <Button onClick={() => logOut(user, navigate)}>Выйти</Button>
          </div>
        </div>
      ) : null}
    </>
  );
});
export default AuthLeftPanel;
 */
