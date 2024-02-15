import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import rp_ucheb_prakt from "../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/6. Рабочая программа учебной практики.pdf";
import rp_proizv_prakt from "../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/6. Рабочая программа производственной практики.pdf";
import rp_diplom_prakt from "../../../../assets/pdf/educationPage/260206/ЭМ 2021 гп/6. Рабочая программа преддипломной практики.pdf";

const MarineElectricalEquipment2021FOS = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Ссылка на рабочие программы практик, предусмотренных образовательной
        программой 26.02.06 "Эксплуатация судового электрооборудования и средств
        автоматики"
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
              <a href={rp_ucheb_prakt} target={"_blank"} rel="noreferrer">
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
              <a href={rp_proizv_prakt} target={"_blank"} rel="noreferrer">
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
              <a href={rp_diplom_prakt} target={"_blank"} rel="noreferrer">
                Рабочая программа преддипломной практики
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/*      <h2>ФОНД ОЦЕНОЧНЫХ СРЕДСТВ</h2>
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
              <a href={FOS_UCH_PR_260206} target={"_blank"} rel="noreferrer">
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
              <a href={FOS_PR_PR_260206} target={"_blank"} rel="noreferrer">
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
              <a href={RP_UCH_PR_Z_260206} target={"_blank"} rel="noreferrer">
                Фонд оценочных средств по преддипломной практике
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table> */}
    </section>
  );
};
export default MarineElectricalEquipment2021FOS;
