import React from "react";
import { NavLink } from "react-router-dom";
import OOP2023vo from "../../../../../assets/pdf/educationPage/260506/OOP2023vo.pdf";
import Ucheb_plan_VO_260506_2023 from "../../../../../assets/pdf/educationPage/260506/Ucheb_plan_VO_26.05.06_2023.pdf";
import annot_2023_260506 from "../../../../../assets/pdf/educationPage/260506/annot_2023_26.05.06.pdf";
import KUG2023_260506 from "../../../../../assets/pdf/educationPage/260506/KUG2023_26.05.06.pdf";
import rp_23_24 from "../../../../../assets/pdf/educationPage/260506/ВР СМ 2023-2024.pdf";
import kpvr_VO from "../../../../../assets/pdf/educationPage/260506/kpvr_VO.pdf";

const VOEkspluatSudEnergUstanovok_23_260506 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.05.06</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/shipPowerPlantsVO2023"
        >
          Эксплуатация судовых энергетических установок ФГОС №192 от
          15.03.2018(в ред. Приказа Минобранауки России от 26.11.2020№1456)
        </NavLink>
      </td>
      <td itemProp="eduLevel">Высшее образование - специалитет</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/shipPowerPlantsVO2023"
        >
          Эксплуатация судовых энергетических установок судов смешанного
          река-море плавания (прием 2023)
        </NavLink>
      </td>
      <td itemProp="eduForm">Заочная</td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="opMain"
              href={OOP2023vo}
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
              itemProp="educationPlan"
              href={Ucheb_plan_VO_260506_2023}
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
              href={annot_2023_260506}
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
              to="../../educationPrograms/shipPowerPlantsVO2023"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/shipPowerPlantsVO2023FOS"
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
              href={KUG2023_260506}
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
              to="../../educationPrograms/shipPowerPlantsVO2023FOS"
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
            <a href={rp_23_24} target={"_blank"} rel="noreferrer">
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a href={kpvr_VO} target={"_blank"} rel="noreferrer">
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
export default VOEkspluatSudEnergUstanovok_23_260506;
