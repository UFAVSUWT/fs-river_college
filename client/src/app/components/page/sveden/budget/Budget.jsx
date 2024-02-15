import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import plan from "../../../../assets/doc/documentPage/План ФХД 2023г. от 30.06.2023.docx";
const Budget = observer(() => {
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
        Финансово-хозяйственная деятельность
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Сведения об объеме образовательной деятельности за 2022 год
      </h3>
      <table className="">
        <tbody>
          <tr>
            <td colSpan="2">
              Объем образовательной деятельности, финансовое обеспечение которой
              осуществляется
            </td>
          </tr>
          <tr>
            <td>
              за счет бюджетных ассигнований федерального бюджета (тыс. руб.){" "}
            </td>
            <td itemProp="finBFVolume">58448.1 </td>
          </tr>
          <tr>
            <td>за счет субъектов Российской Федерации (тыс. руб.) </td>
            <td itemProp="finBRVolume">-</td>
          </tr>
          <tr>
            <td>за счет местных бюджетов (тыс. руб.) </td>
            <td itemProp="finBMVolume">-</td>
          </tr>
          <tr>
            <td>
              по договорам об образовании за счет средств физических и (или)
              юридических лиц (тыс. руб.)
            </td>
            <td itemProp="finPVolume">9352.2</td>
          </tr>
        </tbody>
      </table>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Сведения о поступлении финансовых и материальных средств и об их
        расходовании
      </h3>
      <table>
        <tbody itemProp="volume">
          <tr itemProp="finYear">
            <td>Год</td>
            <td>2022</td>
          </tr>
          <tr itemProp="finPost">
            <td>Поступившие финансовые и материальные средства </td>
            <td>182678</td>
          </tr>
          <tr itemProp="finRas">
            <td>Расходованные финансовые и материальные средства</td>
            <td>188545.3</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Страница Уфимского филиала ФГБОУ ВО "ВГУВТ" на сайте bus.gov.ru
            (официальный сайт для размещения информации о государственных
            (муниципальных) учреждениях)
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Информация о поступлении финансовых и материальных средств и об их
            расходовании по итогам финансового года, 2021
          </a>
        </li>

        <li className="doc__item">
          <a
            itemProp="finPlanDocLink"
            href={plan}
            target={"_blank"}
            rel="noreferrer"
          >
            План ФХД на 2023 год
          </a>
        </li>
      </ul>
      <div>
        <p>
          Уфимским филиалом ФГБОУ ВО «ВГУВТ» запланировано расходование средств
          в 2023 году на организацию культурно - массовой, физкультурной и
          спортивной, оздоровительной работы с обучающимися в размере 3584,6
          тыс. руб., в т.ч. за счет средств федерального бюджета – 3524,6 тыс.
          руб., за счет средств полученных по договорам об оказании платных
          образовательных услуг – 60 тыс. руб.
        </p>
      </div>
    </div>
  );
});
export default Budget;
