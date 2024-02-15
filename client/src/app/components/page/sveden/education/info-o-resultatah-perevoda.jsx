import React from "react";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import perevod_res from "../../../../assets/pdf/educationPage/perevod_res.pdf";

const InfoOResultatahPerevoda = () => {
  return (
    <>
      <TableWrapper
        title="Информация о результатах перевода, восстановления и отчисления на
        01.02.2024"
      >
        <table>
          <tbody>
            <tr itemProp="eduPerevod">
              <td itemProp="eduCode" rowSpan="2">
                Код
              </td>
              <td itemProp="eduName" rowSpan="2">
                Наименование специальности, направления подготовки
              </td>
              <td itemProp="eduLevel" rowSpan="2">
                Уровень образования
              </td>
              <td itemProp="eduForm" rowSpan="2">
                Формы обучения
              </td>
            </tr>
            <tr itemProp="eduPerevod">
              <td itemProp="numberOut">
                Численность обучающихся, переведенных в другие образовательные
                организации
              </td>
              <td itemProp="numberTo">
                Численность обучающихся, переведенных из других образовательных
                организаций
              </td>
              <td itemProp="numberRes">
                Численность восстановленных обучающихся
              </td>
              <td itemProp="numberExp">Численность отчисленных обучающихся</td>
            </tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduCode" rowSpan="3">
                26.05.06
              </td>
              <td itemProp="eduName" rowSpan="3">
                Эксплуатация судовых энергетических установок
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                Высшее образование. Специалитет
              </td>
              <td itemProp="eduForm">Заочная </td>
              <td itemProp="numberOut">-</td>
              <td itemProp="numberTo">-</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">1</td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduCode" rowSpan="3">
                26.02.03
              </td>
              <td itemProp="eduName" rowSpan="3">
                Судовождение
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                среднее профессиональное образование
              </td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberOut">6</td>
              <td itemProp="numberTo">3</td>
              <td>-</td>
              <td>4</td>
            </tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberOut">-</td>
              <td itemProp="numberTo">-</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">7</td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduCode" rowSpan="3">
                26.02.05
              </td>
              <td itemProp="eduName" rowSpan="3">
                Эксплуатация судовых энергетических установок
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                среднее профессиональное образование
              </td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberOut">2</td>
              <td itemProp="numberTo">4</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">3</td>
            </tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberOut">-</td>
              <td itemProp="numberTo">-</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">-</td>
            </tr>
            <tr></tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduCode" rowSpan="3">
                26.02.06
              </td>
              <td itemProp="eduName" rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                среднее профессиональное образование
              </td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberOut">-</td>
              <td itemProp="numberTo">3</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">5</td>
            </tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberOut">-</td>
              <td itemProp="numberTo">-</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">-</td>
            </tr>
            <tr></tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduCode" rowSpan="3">
                23.02.01
              </td>
              <td itemProp="eduName" rowSpan="3">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                среднее профессиональное образование
              </td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberOut">2</td>
              <td itemProp="numberTo">1</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">2</td>
            </tr>
            <tr itemProp="eduPerevod">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberOut">-</td>
              <td itemProp="numberTo">-</td>
              <td itemProp="numberRes">-</td>
              <td itemProp="numberExp">1</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <ul>
        <li>
          <PDF height={"25px"} width={"25px"} />
          <a
            itemProp="eduPerevodEl"
            href={perevod_res}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о результатах перевода, восстановления и отчисления на
            01.02.2024
          </a>
        </li>
      </ul>
    </>
  );
};
export default InfoOResultatahPerevoda;
