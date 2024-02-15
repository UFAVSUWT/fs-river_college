import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../../utils/disabled";
import TableWrapper from "../../../../../common/tableWrapper/TableWrapper";
const KcpVo = observer(() => {
  return (
    <section className="flex jcc">
      <div
        className={toggleClassName(
          "common__container",
          "common__container-white",
          "common__container-black",
          "common__container-contrast"
        )}
      >
        <h1>КЦП ВО на 2024/2025 учeбный год</h1>
        <TableWrapper>
          <table>
            <tbody>
              <tr>
                <td colSpan="5">
                  Контрольные цифры приема для приема в Уфимский филиал
                  Федерального государственного бюджетного образовательного
                  учреждения высшего образования "Волжский государственный
                  университет водного транспорта" в 2024/2025 учебном году
                </td>
              </tr>
              <tr>
                <td rowSpan="2">Код</td>
                <td rowSpan="2">
                  Наименование направлений подготовки и специальностей
                </td>
                <td colSpan="3">Уфимский филиал ФГБОУ ВО "ВГУВТ"</td>
              </tr>
              <tr>
                <td colSpan="3">Заочная форма обучения</td>
              </tr>
              <tr>
                <td colSpan="2">Специалитет</td>
                <td>Всего</td>
                <td>Бюджет</td>
                <td>Договор</td>
              </tr>
              <tr>
                <td>26.05.06</td>
                <td>Эксплуатация судовых энергетических установок</td>
                <td>40</td>
                <td>10</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </section>
  );
});
export default KcpVo;
