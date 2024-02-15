import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import protocol from "../../../../assets/pdf/grants/protocol.pdf";
import poloj_stepend_obesp from "../../../../assets/pdf/grants/Положение о стипендиальном обеспечении.pdf";
import postanovlenie_1390_17122016 from "../../../../assets/pdf/grants/postanovlenie_1390_17.12.2016.pdf";
import prikaz_527_230922_o_naznach_komis from "../../../../assets/pdf/grants/приказ № 18 от 29.01.2024 ПЛЖ о стипендии.pdf";
import polojen from "../../../../assets/pdf/documentPage/Pol_st_dorm_2024.pdf";

import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
const Grants = observer(() => {
  return (
    <div
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <h1
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Стипендии и меры поддержки обучающихся
      </h1>
      <p>
        Виды стипендий, выплачиваемых обучающимся Уфимского филиала ФГБОУ ВО
        «ВГУВТ»:
      </p>
      <ol>
        <li>Государственная академическая</li>
        <li>Социальная стипендия</li>
        <li>Стипендия Правительства Республики Башкортостан</li>
      </ol>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о наличии и условиях предоставления обучающимся стипендий, о
        мерах социальной поддержки обучающихся
      </h3>
      <ul>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a
            itemProp="localAct"
            href={protocol}
            target={"_blank"}
            rel="noreferrer"
          >
            Протокол заседания стипендиальной комиссии №7 от 23.01.2023 г. об
            установление размера стипендий.
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a
            itemProp="grant"
            href={prikaz_527_230922_o_naznach_komis}
            target={"_blank"}
            rel="noreferrer"
          >
            Приказ "О назначении стипендиальной комиссии" № 18 от 29.01.2024 г.
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a
            itemProp="support"
            href={poloj_stepend_obesp}
            target={"_blank"}
            rel="noreferrer"
          >
            Положение о стипендиальном обеспечении и других формах материальной
            поддержки студентов и аспирантов
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a
            href={postanovlenie_1390_17122016}
            target={"_blank"}
            rel="noreferrer"
          >
            Постановление Правительства Российской Федерации № 1390 от
            17.12.2016 г. «О формировании стипендиального фонда»
          </a>
        </li>
      </ul>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация об иных видах материальной поддержки обучающихся
      </h3>
      <ul>
        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Иные виды материальной поддержки обучающихся
          </a>
        </li>
      </ul>
      <h3
        itemProp="hostelInfo"
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о наличии общежития, интерната, в том числе приспособленных
        для использования инвалидами и лицами с ограниченными возможностями
        здоровья
      </h3>
      <p>
        Общежитие филиала приспособлено для использования инвалидами и лицами с
        ограниченными возможностями здоровья: имеются пандусы, поручни, перед
        входом установлена кнопка вызова персонала. Дверные проемы расширенные.
      </p>
      <p>
        На первом этаже 1 комната оборудована для проживания лиц с ОВЗ и (или)
        инвалидов.
      </p>
      <p>
        На первом этаже оборудована 1 аудитория, приспособленная для
        использования инвалидами и лицами с ограниченными возможностями
        здоровья.
      </p>
      <p>
        На первом этаже оборудована комната для приема пищи лицами ограниченными
        возможностями здоровья.
      </p>
      <p itemProp="hostelTS">
        Филиал имеет общежитие общей площадью 5978,2 кв.м. на 375 место,
        согласно норм СанПин.
      </p>
      <p>Для иногородних поступающих выделено 147 мест.</p>
      <p>
        Количество жилых помещений для иногородних обучающихся - 139, количество
        мест - 375.
      </p>
      <p>Адрес общежития: г.Уфа, ул. Ахметова, 275. </p>
      <div className="scroll-table struct__scrollTable">
        <table>
          <tbody>
            <tr>
              <td>Наименование показателя</td>
              <td>Общежития</td>
              <td>Интернаты</td>
            </tr>
            <tr>
              <td>Количество общежитий, интернатов </td>
              <td>1</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td>Общая площадь</td>
              <td>5978,2</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td itemProp="hostelLS">Жилая площадь</td>
              <td>2265,3</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td itemProp="hostelNum">Количество мест</td>
              <td>375</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td itemProp="hostelInv">
                Обеспеченность общежитий 100% мягким и жестким инвентарем по
                установленным стандартным нормам
              </td>
              <td>100%</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td itemProp="hostelFd">
                Наличие питания (включая буфеты, столовые) (да/нет)
              </td>
              <td>Помещение для приема пищи +столовая</td>
              <td>Нет</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li className="doc__item">
          <a href={polojen} target={"_blank"} rel="noreferrer">
            Положение о студенческом общежитии
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Акт проверки общежития
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Сведения о приспособленности общежития для использования инвалидами
            и лицами с ограниченными возможностями здоровья
          </a>
        </li>
      </ul>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Локальные нормативные акты, регламентирующие формирование платы за
        пользование жилым помещением и коммунальные услуги в общежитии
      </h3>
      <ul>
        <li className="doc__item ">
          <a
            itemProp="localActObSt"
            href={"Ustav"}
            target={"_blank"}
            rel="noreferrer"
          >
            Смета стоимости проживания в общежитии с 01.07.2022
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Договор найма жилого помещения в общежитии
          </a>
        </li>
      </ul>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о трудоустройстве выпускников образовательных организаций
      </h3>
      <TableWrapper>
        <table>
          <tbody>
            <tr>
              <td>Код</td>
              <td>
                Наименование профессии, специальности, направления подготовки
              </td>
              <td>
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td colSpan="2">2019 год</td>
              <td colSpan="2">2020 год</td>
              <td colSpan="2">2021 год</td>
              <td colSpan="2">2022 год</td>
            </tr>
            <tr itemProp="graduateJob">
              <td itemProp="eduCode">26.02.03</td>
              <td itemProp="eduName">"Судовождение"</td>
              <td itemProp="eduProf">"Судовождение"</td>
              <td>0</td>
              <td>0</td>
              <td>38</td>
              <td>8</td>
              <td>14</td>
              <td>11</td>
              <td itemProp="v1">42</td>
              <td itemProp="t1">24</td>
            </tr>
            <tr itemProp="graduateJob">
              <td itemProp="eduCode">26.02.05</td>
              <td itemProp="eduName">
                "Эксплуатация судовых энергетических установок"
              </td>
              <td itemProp="eduProf">
                "Эксплуатация судовых энергетических установок"
              </td>
              <td>0</td>
              <td>0</td>
              <td>40</td>
              <td>13</td>
              <td>36</td>
              <td>25</td>
              <td itemProp="v1">43</td>
              <td itemProp="t1">14</td>
            </tr>
            <tr itemProp="graduateJob">
              <td itemProp="eduCode">26.02.06</td>
              <td itemProp="eduName">
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td itemProp="eduProf">
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td>0</td>
              <td>0</td>
              <td>26</td>
              <td>13</td>
              <td>22</td>
              <td>11</td>
              <td itemProp="v1">27</td>
              <td itemProp="t1">19</td>
            </tr>
            <tr itemProp="graduateJob">
              <td itemProp="eduCode">23.02.01</td>
              <td itemProp="eduName">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td itemProp="eduProf">
                Организация перевозок и управление на водном транспорте{" "}
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td itemProp="v1">1</td>
              <td itemProp="t1">1</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default Grants;
