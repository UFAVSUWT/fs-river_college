import React from "react";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import res_priema from "../../../../assets/pdf/educationPage/res_priema.pdf";
const InfoOResultPriema = () => {
  return (
    <>
      <TableWrapper
        title="Информация о результатах приема по каждой профессии, специальности
        среднего профессионального образования (при наличии вступительных
        испытаний), каждому направлению подготовки или специальности высшего
        образования с различными условиями приема (на места за счет бюджетных
        ассигнований федерального бюджета, бюджетов субъектов Российской
        Федерации, местных бюджетов и по договорам об образовании за счет
        средств физических и (или) юридических лиц):"
      >
        {" "}
        <table>
          <tbody>
            <tr itemProp="eduPriem">
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
              <td colSpan="4">
                Результаты приема обучающихся за счет (количество человек):
              </td>
              <td itemProp="score" rowSpan="2">
                Средняя сумма набранных баллов по всем вступительным испытаниям
              </td>
            </tr>
            <tr>
              <td itemProp="numberBF">
                бюджетных ассигнований федерального бюджета
              </td>
              <td itemProp="numberBR">
                бюджетов субъектов Российской Федерации
              </td>
              <td itemProp="numberBM">местных бюджетов </td>
              <td itemProp="numberP">
                средств физических и (или) юридических лиц
              </td>
            </tr>
            <tr itemProp="eduPriem">
              <td itemProp="eduCode">26.02.03</td>
              <td itemProp="eduName">
                26.02.03 Судовождение (углубленная подготовка) на базе 9 класса
              </td>
              <td itemProp="eduLevel">СПО</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="numberBF">50</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberP">2</td>
              <td itemProp="score">-</td>
            </tr>
            <tr itemProp="eduPriem">
              <td itemProp="eduCode">26.02.05</td>
              <td itemProp="eduName">
                26.02.05 Эксплуатация судовых энергетических установок на базе 9
                класса
              </td>
              <td itemProp="eduLevel">СПО</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="numberBF">50</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberP">1</td>
              <td itemProp="score">-</td>
            </tr>
            <tr itemProp="eduPriem">
              <td itemProp="eduCode">26.02.06</td>
              <td itemProp="eduName">
                26.02.06 Эксплуатация судового электрооборудования и средств
                автоматики на базе 9 класса
              </td>
              <td itemProp="eduLevel">СПО</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="numberBF">50</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberP">1</td>
              <td itemProp="score">-</td>
            </tr>
            <tr itemProp="eduPriem">
              <td itemProp="eduCode">23.02.01</td>
              <td itemProp="eduName">
                23.02.01 Организация перевозок и управление на транспорте (по
                видам) на базе 9 класса
              </td>
              <td itemProp="eduLevel">СПО</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="numberBF">25 </td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberP">3</td>
              <td itemProp="score">-</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <ul>
        <li>
          <PDF height={"25px"} width={"25px"} />
          <a
            itemProp="eduPriemEl"
            href={res_priema}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о результатах приема по каждой профессии, специальности
            среднего профессионального образования (при наличии вступительных
            испытаний), каждому направлению подготовки или специальности высшего
            образования с различными условиями приема (на места за счет
            бюджетных ассигнований федерального бюджета, бюджетов субъектов
            Российской Федерации, местных бюджетов и по договорам об образовании
            за счет средств физических и (или) юридических лиц)
          </a>
        </li>
      </ul>
    </>
  );
};
export default InfoOResultPriema;
