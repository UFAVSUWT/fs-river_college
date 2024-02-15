import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import RP_230201 from "../../../../assets/pdf/educationPage/230201/RP_Uch_prakt_230201.pdf";
import FOS_UCH_PR_230201 from "../../../../assets/pdf/educationPage/230201/FOS_Uch_prakt_230201.pdf";
import RP_UCH_PR_230201 from "../../../../assets/pdf/educationPage/230201/RP_Pr_prakt_230201.pdf";
import FOS_PR_PR_230201 from "../../../../assets/pdf/educationPage/230201/FOS_Pr_prakt_230201.pdf";
import RP_PR_PR_230201 from "../../../../assets/pdf/educationPage/230201/RP_PDP_230201.pdf";
import RP_UCH_PR_Z_230201 from "../../../../assets/pdf/educationPage/230201/FOS_PDP_230201.pdf";

const OrganizationOfTransportation2020FOS = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Ссылка на рабочие программы практик, предусмотренных образовательной
        программой 23.02.01 "Организация перевозок и управление на транспорте"
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
              <a href={RP_230201} target={"_blank"} rel="noreferrer">
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
              <a href={RP_UCH_PR_230201} target={"_blank"} rel="noreferrer">
                Рабочая программа производственной практики
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={RP_PR_PR_230201} target={"_blank"} rel="noreferrer">
                Рабочая программа преддипломной практики
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
              <a href={FOS_UCH_PR_230201} target={"_blank"} rel="noreferrer">
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
              <a href={FOS_PR_PR_230201} target={"_blank"} rel="noreferrer">
                Фонд оценочных средств по производственной практике
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={RP_UCH_PR_Z_230201} target={"_blank"} rel="noreferrer">
                Фонд оценочных средств по преддипломной практике
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default OrganizationOfTransportation2020FOS;
