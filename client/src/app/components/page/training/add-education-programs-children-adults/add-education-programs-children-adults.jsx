import React from "react";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
const AddEducationProgramsChildrenAdults = observer(() => {
  return (
    <div
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <TableWrapper title="Общеразвивающие программы">
        <table>
          <tbody>
            <tr>
              <td>№п/п</td>
              <td>Наименование программы</td>
              <td>Количество часов</td>
              <td>Стоимость руб./чел.</td>
              <td>Минимальное количество слушателей</td>
              <td>Количество дней</td>
              <td>Форма обучения</td>
              <td>Записаться на курсы</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>
                Дополнительная общеразвивающая программа «Английский язык»
              </td>
              <td>72</td>
              <td>4000</td>
              <td>18</td>
              <td>36</td>
              <td>
                - очная, или смешанная с использованием дистанционных
                образовательных технологий и электронного обучения
              </td>
              <td>
                Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова, 275
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Дополнительная общеразвивающая программа «Математика»</td>
              <td>72</td>
              <td>4900</td>
              <td>15</td>
              <td>36</td>
              <td>
                - очная, или смешанная с использованием дистанционных
                образовательных технологий и электронного обучения
              </td>
              <td>
                Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова, 275
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default AddEducationProgramsChildrenAdults;
