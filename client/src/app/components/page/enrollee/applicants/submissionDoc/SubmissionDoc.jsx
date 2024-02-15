import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../utils/disabled";
import Perechen from "../../../../../assets/doc/applicant/perechen.docx";
import Priem2023 from "../../../../../assets/pdf/applicant/priem2023_v_el_forme.pdf";
import zayavlenie from "../../../../../assets/doc/enrollee/zayavlenie_na_postuplenie.doc";
import med from "../../../../../assets/pdf/enrolle/медкомиссия.pdf";
import { ReactComponent as DOC } from "../../../../../assets/svg/office/word.svg";
import { ReactComponent as PDF } from "../../../../../assets/svg/office/pdf.svg";
const SubmissionDoc = observer(() => {
  return (
    <>
      <section>
        <h1>Перечень документов для поступления по программам СПО:</h1>
        <ol>
          <li>
            Оригинал или ксерокопия документа, удостоверяющего личность,
            гражданство (паспорт)
          </li>
          <li>
            Оригинал или ксерокопия документа государственного образца об
            образовании
          </li>
          <li>Фотографии , 3х4 , 5 шт.</li>
          <li>Медицинское заключение об отсутствии противопоказаний</li>
          <li>
            Копия паспорта родителей или законного представителя (для
            несовершеннолетних)
          </li>
          <li>Свидетельство о рождении (копия)</li>
          <li>Справка с места жительства о составе семьи</li>
          <li>Характеристика из школы</li>
          <li>Приписное свидетельство, военный билет (при наличии)</li>
          <li>Социальный номер ИНН (копия)</li>
          <li>Пенсионное страховое свидетельство СНИЛС (копия)</li>
          <li>Медицинский полис (копия)</li>
          <li>Сертификат о прививках (оригинал или копия)</li>
          <li>Копия трудовой книжки (при наличии)</li>
        </ol>
        <p>
          <DOC width={"25px"} height={"25px"} />{" "}
          <a
            href={Perechen}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Скачать перечень документов
          </a>
        </p>
        <p>
          <a
            href={zayavlenie}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            <DOC width={"25px"} height={"25px"} />
          </a>{" "}
          <a
            href={zayavlenie}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Заявление на поступление
          </a>{" "}
        </p>
        <p>
          <a
            href={zayavlenie}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            <PDF width={"25px"} height={"25px"} />
          </a>{" "}
          <a
            href={med}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            ЛИСТ прохождения предварительного медицинского освидетельствования
          </a>{" "}
        </p>
      </section>
      <section>
        <h1>
          Прием документов для поступления на обучение в университет по основным
          образовательным программам СПО в электронной форме
        </h1>
        <p>
          Заявление можно отправить по электронной почте, сканированные формы
          документов отправлять на{" "}
          <a
            href="mailto:nrumetod@vsuwt.ru"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            nrumetod@vsuwt.ru
          </a>
        </p>
        <p>
          Заявление и перечень документов формируются в соответствии с пунктом
          IV Правил приема на обучение по образовательным программам среднего
          профессионального образования в Федеральное государственное бюджетное
          образовательное учреждение высшего образования «Волжский
          государственный университет водного транспорта» на 2023/24 учебный
          год.
        </p>
        <p>Прием документов на первый курс начинается:</p>
        <ul>
          <li>
            на <b> очную</b> форму, <b>очно-заочную</b> и <b>заочную</b>{" "}
            получения образования – 20 июня;
          </li>
        </ul>
        <p> Прием заявлений в университет и филиалы завершается:</p>

        <ul>
          <li>
            на <b>очную</b> форму получения образования – 15 августа;
          </li>
          <li>
            на <b>очно-заочную</b> получения образования – 15 сентября;
          </li>
          <li>
            на <b>заочную</b> форму получения образования – 17 ноября.
          </li>
        </ul>
        <p>
          <a
            href={Priem2023}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Документация
          </a>
        </p>
      </section>
    </>
  );
});
export default SubmissionDoc;
