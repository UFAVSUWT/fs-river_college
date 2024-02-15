import React from "react";
import { NavLink } from "react-router-dom";
import RPV_EM from "../../../../../assets/pdf/educationPage/260206/RPV_EM.pdf";
import Image12 from "../../../../../assets/pdf/educationPage/260206/5.jpg";
import OOP5 from "../../../../../assets/pdf/educationPage/260206/oop/OOP5.pdf";
import Annot5 from "../../../../../assets/pdf/educationPage/260206/annot/annot5.pdf";
import KPV from "../../../../../assets/pdf/educationPage/KPV.pdf";

const SPOEkspluatSudovEelectrooborud_20_260206 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.02.06</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/marineElectricalEquipment2020"
        >
          Эксплуатация судового электрооборудования и средств автоматики (ФГОС
          от 07.05.2014 г. № 444 (в ред. Приказа Минобрнауки России от
          14.09.2016 N 1193))
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/marineElectricalEquipment2020"
        >
          Эксплуатация судового электрооборудования и средств автоматики (прием
          2020)
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
              style={{ backgroundColor: "red" }}
              itemProp="educationPlan"
              href={"Ucheb_plan_VO_260506_2023"}
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
              to="../../educationPrograms/marineElectricalEquipment2020"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/marineElectricalEquipment2020FOS"
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
              to="../../educationPrograms/marineElectricalEquipment2020FOS"
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
export default SPOEkspluatSudovEelectrooborud_20_260206;
