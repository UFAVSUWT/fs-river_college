import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { toggleClassName } from "../../../../../utils/disabled";
import { observer } from "mobx-react-lite";
const Monitoring = observer(() => {
  return (
    <section>
      <h1>Мониторинг подачи документов</h1>
      <p>
        <ul>
          <li>
            <NavLink
              to="listsOfPersonsWhoAppliedForAdmission"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Списки лиц, подавших заявление на поступление
            </NavLink>
          </li>
          <li>
            <NavLink
              to="competitionLists"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Конкурсные списки
            </NavLink>
          </li>
          <li>
            <NavLink
              to="draftOrdersForEnrollment"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Проекты приказов на зачисление
            </NavLink>
          </li>
          <li>
            <NavLink
              to="enlistedOrders"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Приказы зачисленных
            </NavLink>
          </li>
        </ul>
      </p>
      <Outlet />
    </section>
  );
});
export default Monitoring;
