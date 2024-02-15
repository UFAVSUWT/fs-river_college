import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import InfoAboutPrepodSudov from "./infoAboutPrepodSudov";
import InfoAboutPrepodEnerget from "./infoAboutPrepodEnerget";
import InfoAboutPrepodElectroobor from "./infoAboutPrepodElectroobor";
import InfoAboutPrepodPerevozki from "./infoAboutPrepodPerevozki";
const Employees = observer(() => {
  return (
    <div
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <h1
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Руководство. Педагогический (научно-педагогический) состав
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о руководителе/заместителях руководителя Уфимского филиала
        ФГБОУ ВО "ВГУВТ"
      </h3>
      <TableWrapper>
        <table>
          <tbody>
            <tr>
              <td>ФИО</td>
              <td>Должность</td>
              <td>Контактные телефоны</td>
              <td>Адреса электронной почты</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Ахмадеева Фарида Шариповна </td>
              <td itemProp="post">Директор </td>
              <td itemProp="telephone">8 (347) 215-14-00 доб. 6</td>
              <td itemProp="email">uf-vsuwt@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Мусина Гульфия Ириковна </td>
              <td itemProp="post">Заместитель директора </td>
              <td itemProp="telephone">8 (347) 215-14-00 доб. # 312</td>
              <td itemProp="email">pur@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Акбашева Альбина Галимзяновна </td>
              <td itemProp="post">Заместитель директора </td>
              <td itemProp="telephone">8 (347) 215-14-00 доб. # 320</td>
              <td itemProp="email">pvr@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Жоссан Елена Евгеньевна </td>
              <td itemProp="post">Главный бухгалтер </td>
              <td itemProp="telephone">8 (347) 215-14-00 доб. 1</td>
              <td itemProp="email">buh@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Мукимов Ралиф Фаритович</td>
              <td itemProp="post">
                Начальник центра организационно-правовой работы{" "}
              </td>
              <td itemProp="telephone">8 (347) 215-14-00 доб. # 311</td>
              <td itemProp="email">copr@uf-vsuwt.ru</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о руководителях филиалов Уфимского филиала ФГБОУ ВО "ВГУВТ"
        (при наличии)
      </h3>
      Уфимский филиал ФГБОУ ВО "ВГУВТ" филиалов не имеет.
      <table>
        <tbody>
          <tr>
            <td>Наименование филиала</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ФИО</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Должность</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Контактные телефоны</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Адреса электронной почты</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о составе педагогических (научно-педагогических) работников
        Уфимского филиала ФГБОУ ВО "ВГУВТ"
      </h3>
      <TableWrapper>
        <table>
          <tbody>
            <tr>
              <td>Ф.И.О</td>
              <td>Должность преподавателя, категория </td>
              <td>
                Перечень преподаваемых учебных предметов, курсов, дисциплин
                (модулей){" "}
              </td>
              <td>Уровень образования </td>
              <td>Квалификация</td>
              <td>Наименование направления подготовки и (или) специальности</td>
              <td>Ученая степень (при наличии)</td>
              <td>Ученое звание (при наличии)</td>
              <td>
                Сведения о повышении квалификации и (или) профессиональной
                переподготовке педагогического работника (при наличии)
              </td>
              <td>Общий стаж работы</td>
              <td>Стаж работы пед. раб./раб.по спец.</td>
              <td>
                Наименование образовательных программ, в реализации которых
                участвует педагогический работник
              </td>
            </tr>
            <InfoAboutPrepodSudov />
            <InfoAboutPrepodEnerget />
            <InfoAboutPrepodElectroobor />
            <InfoAboutPrepodPerevozki />
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default Employees;
