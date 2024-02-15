import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import RP_260205 from "../../../../assets/pdf/educationPage/260205/RP_Uch_prakt_260205.pdf";
import FOS_UCH_PR_260205 from "../../../../assets/pdf/educationPage/260205/FOS_Uch_prakt_260205.pdf";
import RP_UCH_PR_260205 from "../../../../assets/pdf/educationPage/260205/RP_Pr_prakt_260205.pdf";
import FOS_PR_PR_260205 from "../../../../assets/pdf/educationPage/260205/FOS_Pr_prakt_260205.pdf";

const ShipPowerPlants2020FOS = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Ссылка на рабочие программы практик, предусмотренных образовательной
        программой 26.02.05 "Эксплуатация судовых энергетических установок"
      </h1>
      <h2>Рабочие программы практик</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={RP_260205} target={"_blank"} rel="noreferrer">
                Рабочая программа учебной практики
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={RP_UCH_PR_260205} target={"_blank"} rel="noreferrer">
                Рабочая программа производственной практики
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>ФОНД ОЦЕНОЧНЫХ СРЕДСТВ</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={FOS_UCH_PR_260205} target={"_blank"} rel="noreferrer">
                Фонд оценочных средств по учебной практике
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={FOS_PR_PR_260205} target={"_blank"} rel="noreferrer">
                Фонд оценочных средств по производственной практике
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default ShipPowerPlants2020FOS;
