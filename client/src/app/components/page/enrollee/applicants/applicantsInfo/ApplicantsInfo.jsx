import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../utils/disabled";
import zayavlenie from "../../../../../assets/doc/enrollee/zayavlenie_na_postuplenie.doc";
import { ReactComponent as DOC } from "../../../../../assets/svg/office/word.svg";
import med from "../../../../../assets/pdf/enrolle/медкомиссия.pdf";
import { ReactComponent as PDF } from "../../../../../assets/svg/office/pdf.svg";
const ApplicantsInfo = observer(() => {
  return (
    <section>
      <h1>Узнать, как стать нашим курсантом</h1>
      <ol>
        <li>
          Прием документов для поступления на обучение по основным образова-
          тельным программам СПО:
          <ul>
            <li>
              На первый курс начинается 20 июня и продлится предварительно по 15
              августа 2023 года
            </li>
          </ul>
        </li>
        <li>
          Для подачи документов необходимо предоставить:
          <ul>
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
            <b>Зачисление осуществляется только при наличии:</b>
            <ul>
              <li>Оригинала документа об образовании (с приложением);</li>
              <li>Согласия на зачисление;</li>
              <li>Полного комплекта документов.</li>
            </ul>
          </ul>
        </li>
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
        <li>
          Прием в филиал осуществляется на конкурсной основе по среднему баллу
          аттестата!
        </li>
        <p>
          Средний балл аттестата исчисляется путем сложения всех оценок по
          предметам в аттестате и деления на их количество (учитывается 4 цифры
          после запятой, без округления).
        </p>
        <li>
          Заявление для поступления в Уфимский филиал ФГБОУ ВО «ВГУВТ» можно
          подать:
          <ol>
            <li>
              В приёмной комиссии Уфимского филиала ФГБОУ ВО «ВГУВТ» (г.Уфа,ул.
              Ахметова, д.275, каб. 5);
            </li>
            <li>По почте (все почтовые операторы);</li>
            <li>
              По электронной почте{" "}
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
          </ol>
        </li>
      </ol>
      <p>
        {" "}
        (заявление предварительно необходимо{" "}
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
          скачать
        </a>{" "}
        и заполнить)
      </p>
    </section>
  );
});
export default ApplicantsInfo;
