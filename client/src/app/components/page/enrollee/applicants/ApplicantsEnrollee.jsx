import React from "react";
import { Outlet } from "react-router";
import { toggleClassName, toggleIconColor } from "../../../../utils/disabled";
import ChapterMenu from "../../../ui/chapterMenu/ChapterMenu";
import { ReactComponent as Logo } from "../../../../assets/svg/riveruniversityLogo.svg";
import { observer } from "mobx-react-lite";
const ApplicantsEnrollee = observer(() => {
  const linksMenu = [
    { title: "Выбор профессии", path: "" },
    {
      title: "Приемная кампания 2023",
      path: "reception",
    },
    {
      title: "Подача документов",
      path: "submissionDoc",
    },
    {
      title: "Мониторинг подачи документов",
      path: "monitoring",
    },
    {
      title: "Узнать как стать нашим курсантом",
      path: "applicantsInfo",
    },
  ];
  return (
    <>
      <div
        className={toggleClassName(
          "education__container",
          "education__container-white",
          "education__container-black",
          "education__container-contrast"
        )}
      >
        <h1 className="education__container-title">Приемная КАМПАНИЯ 2023</h1>
        <section className="margin-tb1 education__container-content">
          <h1 className="education__container-title">
            ЧАСЫ РАБОТЫ ПРИЕМНОЙ КОМИССИИ С ПОСЕТИТЕЛЯМИ В 2023 ГОДУ:
          </h1>
          <div className="margin-tb1 flex applicantsEnrollee-header">
            <div className="applicantsEnrollee-header-body">
              <p>
                Пн-Чт: <b>с 9.00 до 17.15.</b>
              </p>
              <p>
                Пт:{" "}
                <b>с 9.00 до 16.00 (с 16-00 до 17.15 работа с документами)</b>
              </p>
              <p>Обед с 12.00 до 13.00</p>
              <p>
                Сб, Вс: <b>Выходной</b>
              </p>
              <h1>Задать вопрос приемной комиссии:</h1>
              <ul>
                <li>
                  <a
                    href="tel:+7 (347) 2782886"
                    className={toggleClassName(
                      "education__link",
                      "education__link-white",
                      "education__link-black",
                      "education__link-contrast"
                    )}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    +73472782886
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="tel:+7 (347) 2782883"
                    className={toggleClassName(
                      "education__link",
                      "education__link-white",
                      "education__link-black",
                      "education__link-contrast"
                    )}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    +73472782883
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="mailto:opp@uf-vsuwt.ru"
                    target={"_blank"}
                    rel="noreferrer"
                    className={toggleClassName(
                      "education__link",
                      "education__link-white",
                      "education__link-black",
                      "education__link-contrast"
                    )}
                  >
                    UF-VSUWT@yandex.ru
                  </a>
                </li>
              </ul>
            </div>

            <div className="applicantsEnrollee-header-logo">
              <Logo
                fill={toggleIconColor("#0C1C2B", "", "#000")}
                width="50%"
                height={"50%"}
              />
              <div className="applicantsEnrollee-header-title">
                Свяжи свою <br /> жизнь с морем!
              </div>
            </div>
          </div>
        </section>

        <div className="education__container-navigate">
          <ChapterMenu title={"Навигация раздела"} linksArray={linksMenu} />
        </div>
        <div className="education__container-content">
          <Outlet />
        </div>
      </div>
    </>
  );
});
export default ApplicantsEnrollee;
