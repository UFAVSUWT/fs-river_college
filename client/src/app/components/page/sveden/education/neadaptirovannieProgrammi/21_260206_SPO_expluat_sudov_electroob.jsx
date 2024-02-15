import React from "react";
import { NavLink } from "react-router-dom";
import RPV_EM from "../../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/ВР ЭМ  2021-2022 г.п.pdf";
import Image12 from "../../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/5. Календарный  график учебного процесса.pdf";
import OOP5 from "../../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/1. Описание образовательной программы.pdf";
import Annot5 from "../../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/3. Аннотации к рабочим программам дисциплин.pdf";
import KPV from "../../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/8. Календарный план Воспитательной работы.pdf";
import educationPlan from "../../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/2. Учебный план.pdf";

const SPOEkspluatSudovEelectrooborud_21_260206 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.02.06</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/marineElectricalEquipment2021"
        >
          Эксплуатация судового электрооборудования и средств автоматики ФГОС
          №675 от 26.11.2020
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/marineElectricalEquipment2021"
        >
          Эксплуатация судового электрооборудования и средств автоматики (прием
          2021)
        </NavLink>
      </td>
      <td itemProp="eduForm">Очная</td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a itemProp="opMain" href={OOP5} target={"_blank"} rel="noreferrer">
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp={"educationPlan"}
              href={educationPlan}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="educationAnnotation"
              href={Annot5}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/marineElectricalEquipment2021"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/marineElectricalEquipment2021FOS"
            >
              Скачать РП РЦ
            </NavLink>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="educationShedule"
              href={Image12}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        {" "}
        <ul>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/marineElectricalEquipment2021FOS"
            >
              Скачать
            </NavLink>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a href={RPV_EM} target={"_blank"} rel="noreferrer">
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a href={KPV} target={"_blank"} rel="noreferrer">
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <NavLink to={"../../local-acts"}>
              Локальные нормативные акты
            </NavLink>
          </li>
        </ul>
      </td>
    </tr>
  );
};
export default SPOEkspluatSudovEelectrooborud_21_260206;
