import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
const CommonMenu = observer(() => {
  return (
    <div
      className={toggleClassName(
        "common__menu",
        "common__menu-white",
        "common__menu-black",
        "common__menu-contrast"
      )}
    >
      <h3
        style={{ fontSize: toggleFontSize(14) }}
        className={`common__menu-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Навигация раздела
      </h3>
      <ul style={{ fontSize: toggleFontSize(12) }}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="common"
          >
            Основные сведения
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="struct"
          >
            Структура и органы управления образовательной организацией
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="document"
          >
            Документы
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="education"
          >
            Образование
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="eduStandarts"
          >
            Образовательные стандарты и требования
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="employees"
          >
            Руководство. Педагогический (научно-педагогический) состав
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="objects"
          >
            Материально-техническое обеспечение и оснащённость образовательного
            процесса
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="grants"
          >
            Стипендии и меры поддержки обучающихся
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="paid__edu"
          >
            Платные образовательные услуги
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="budget"
          >
            Финансово-хозяйственная деятельность
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="vacant"
          >
            Вакантные места для приема (перевода) обучающихся
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="ovz"
          >
            Доступная среда
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? toggleClassName(
                    "common__menu-active",
                    "common__menu-white-active",
                    "common__menu-black-active",
                    "common__menu-contrast-active"
                  )
                : toggleClassName(
                    "common__menu-item",
                    "common__menu-white-item",
                    "common__menu-black-item",
                    "common__menu-contrast-item"
                  )
            }
            to="inter"
          >
            Международное сотрудничество
          </NavLink>
        </li>
      </ul>
    </div>
  );
});
export default CommonMenu;
