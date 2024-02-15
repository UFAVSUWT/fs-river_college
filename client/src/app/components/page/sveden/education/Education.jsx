import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import Licenz1 from "../../../../assets/pdf/documentPage/Выписка из реестра лицензий по состоянию на 04.07.2023 г..pdf";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import Pologenie_Parus from "../../../../assets/pdf/educationPage/Pologenie_Parus.pdf";
import Pologhenie_DO from "../../../../assets/pdf/educationPage/Pologhenie_DO.pdf";
import Pologhenie_EL_Sreda from "../../../../assets/pdf/educationPage/Pologhenie_EL_Sreda.pdf";
import Pologhenie_kontrolDO from "../../../../assets/pdf/educationPage/Pologhenie_kontrolDO.pdf";
import FOS_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/FOS_IA_SV_uglubl.pdf";
import Programma_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/Programma_IA_SV_uglubl.pdf";
import KPV from "../../../../assets/pdf/educationPage/KPV.pdf";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { NavLink } from "react-router-dom";
import adOOP1 from "../../../../assets/pdf/educationPage/260203/oop/adOOP_260203.pdf";
import UP19 from "../../../../assets/pdf/educationPage/260203/syllabus/adUP_260203.pdf";
import adAnnot from "../../../../assets/pdf/educationPage/260203/annot/annot_SV_AD.pdf";
import RP_260203 from "../../../../assets/pdf/educationPage/260203/RP_Uch_prakt_2018ugl_3-10.pdf";
import FOS_UCH_PR_260203 from "../../../../assets/pdf/educationPage/260203/FOS_Uch_prakt_2018ugl_3-10.pdf";
import RP_UCH_PR_260203 from "../../../../assets/pdf/educationPage/260203/RP_pr_prakt_2018ugl_3-10.pdf";
import FOS_PR_PR_260203 from "../../../../assets/pdf/educationPage/260203/FOS_pr_prakt_2018ugl_3-10.pdf";
import RP_PR_PR_260203 from "../../../../assets/pdf/educationPage/260203/RP_Pr_prakt_2018ugl_ZO_3-10.pdf";
import RP_UCH_PR_Z_260203 from "../../../../assets/pdf/educationPage/260203/RP_Uch_prakt_2018ugl_ZO_3-10.pdf";
import adkug_260203 from "../../../../assets/pdf/educationPage/260203/adkug_260203.pdf";
import Pologenie_ucheb_prozess_ovz_2017 from "../../../../assets/pdf/educationPage/260203/Pologenie_ucheb_prozess_ovz_2017.pdf";
import Pologen_Fizra from "../../../../assets/pdf/educationPage/260203/Pologen_Fizra.pdf";
import InfoORealisUrovnyahObrazovaniya from "./info-o-realis-urovnyah-obrazovaniya";
import SpisokObsheobrazovatelnDisciplin from "./spisok-obsheobrazovateln-disciplin";
import InfoOChislenObuch from "./info-o-chislen-obuch";
import InfoOResultPriema from "./info-o-result-priema";
import InfoOResultatahPerevoda from "./info-o-resultatah-perevoda";
import NeadaptirovannieProgrammi from "./neadaptirovannie-programmi";

const Education = observer(() => {
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
        Образование
      </h1>
      <ul>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={Licenz1} target={"_blank"} rel="noreferrer">
            Выписка из реестра лицензий Федеральной службы по надзору в сфере
            образования и науки (16.09.2022)
          </a>
        </li>
      </ul>
      <InfoORealisUrovnyahObrazovaniya />
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о профессионально-общественной аккредитации образовательной
        программы: - образовательные программы, реализуемые в образовательном
        учреждении, не имеют профессионально-общественной аккредитации.
      </h3>
      <div className="common__container scroll-table struct__scrollTable">
        <table className="">
          <tbody>
            <tr itemProp="eduPOAccred">
              <td itemProp="eduCode">Код</td>
              <td itemProp="eduName">
                Наименование профессии, специальности, направления подготовки
              </td>
              <td itemProp="orgName">Наименование аккредитующей организации</td>
              <td itemProp="dateEnd">
                Срок действия профессионально-общественной аккредитации (дата
                окончания действия свидетельства о профессионально-общественной
                аккредитации)
              </td>
            </tr>
            <tr itemProp="eduPOAccred">
              <td itemProp="eduCode">-</td>
              <td itemProp="eduName">-</td>
              <td itemProp="orgName">-</td>
              <td itemProp="dateEnd">-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <InfoOChislenObuch />

      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о численности обучающихся, являющихся иностранными
        гражданами: 1 обучающийся
      </h3>
      <InfoOResultPriema />
      <InfoOResultatahPerevoda />
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Реализуемые образовательные программы (учебные предметы, курсы,
        дисциплины (модули), практики), в том числе адаптированные
      </h3>
      <SpisokObsheobrazovatelnDisciplin />
      <NeadaptirovannieProgrammi />
      <TableWrapper title="Информация по адаптированным образовательным программам:">
        {" "}
        <table>
          <tbody>
            <tr itemProp="eduAdOp">
              <td itemProp="eduCode">Код</td>
              <td itemProp="eduName">
                Наименование специальности, направления подготовки, шифр и
                наименование области науки, научной специальности
              </td>
              <td itemProp="eduLevel">
                Уровень образования: 1) высшее образование -бакалавриат; 2)
                высшее образование - специалитет; 3) высшее образование -
                магистратура; 4) высшее образование - подготовка кадров высшей
                квалификации; 5) среднее профессиональное образование
              </td>
              <td itemProp="eduProf">
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduForm">
                Реализуемые формы обучения: 1) очная; 2) очно-заочная; 3)
                заочная
              </td>
              <td itemProp="opMain">
                Ссылка на описание образовательной программы с приложением ее
                копии
              </td>
              <td itemProp="educationPlan">Ссылка на учебный план</td>
              <td itemProp="educationAnnotation">
                Ссылка на аннотации к рабочим программам дисциплин (по каждой
                дисциплине в составе образовательной программы)
              </td>
              <td itemProp="educationShedule">
                Ссылка на календарный учебный график
              </td>
              <td itemProp="educationRpd">
                Ссылка на рабочие программы воспитания
              </td>
              <td itemProp="eduPr">
                Ссылка на календарный план воспитательной работы
              </td>
              <td itemProp="methodology">
                Ссылка на методические и иные документы, разработанные
                образовательной организацией для обеспечения образовательного
                процесса
              </td>
              <td>
                Использование при реализации образовательных программ
                электронного обучения и дистанционных образовательных технологий
              </td>
            </tr>
            <tr itemProp="eduAdOp">
              <td itemProp="eduCode">26.02.03</td>
              <td itemProp="eduName">
                <NavLink to="../../educationPrograms/navigationDepth">
                  Судовождение (углубленная подготовка), на базе основного
                  общего образования (9 классов)
                </NavLink>
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduProf">
                <NavLink to="../../educationPrograms/navigationDepth">
                  Судовождение (углубленная подготовка), на базе основного
                  общего образования (9 классов)
                </NavLink>
              </td>
              <td itemProp="eduForm">Очная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      itemProp="opMain"
                      href={adOOP1}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Адаптированная ООП для специальности 26.02.03
                      "Судовождение" на базе 9 классов
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
                      href={UP19}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Учебный план 26.02.03 "Судовождение"
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
                      href={adAnnot}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <PDF height={"25px"} width={"25px"} />
                <a
                  itemProp="educationShedule"
                  href={adkug_260203}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Календарный учебный график для специальности 26.02.03
                  "Судовождение" (на базе 9 классов)
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/navigationDepth">
                      Рабочие программы дисциплин для специальности СПО 26.02.03
                      "Судовождение"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260203} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС учебной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС производственной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (заочная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_ucheb_prozess_ovz_2017}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об организации учебного процесса для инвалидов и
                      лиц с ограниченными возможностями здоровья
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologen_Fizra} target={"_blank"} rel="noreferrer">
                      Положение о порядке проведения и объеме учебных занятий по
                      физической культуре очно-заочной, заочной формам обучения,
                      а также для студентов инвалидов и лиц с ограниченными
                      возможностями здоровья
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li></li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      itemProp="methodology"
                      href={Pologhenie_DO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      itemProp="methodology"
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      itemProp="methodology"
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      itemProp="methodology"
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <TableWrapper
        title=" Информация о направлениях и результатах научной
        (научно-исследовательской) деятельности:"
      >
        <table>
          <tbody>
            <tr itemProp="eduNir">
              <td itemProp="eduCode">Код, шифр</td>
              <td itemProp="eduName">
                Наименование специальности, направления подготовки, наименование
                группы научных специальностей
              </td>
              <td itemProp="perechenNir">
                Перечень научных направлений, в рамках которых ведется научная
                (научно-исследовательская) деятельность
              </td>
              <td itemProp="eduProf">
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduLevel">Уровень образования</td>
              <td itemProp="napravNir">
                Название научного направления/научной школы
              </td>
              <td itemProp="resultNir">
                Результаты научной (научно-исследовательской) деятельности
              </td>
              <td itemProp="baseNir">
                Сведения о научно-исследовательской базе для осуществления
                научной (научно-исследовательской) деятельности
              </td>
            </tr>
            <tr itemProp="eduNir">
              <td itemProp="eduCode">26.02.03 </td>
              <td itemProp="eduName">Судовождение</td>
              <td itemProp="perechenNir" rowspan="4">
                Инновационные технологии в преподавании дисциплин;
                Компетентностный подход в системе СПО
              </td>
              <td itemProp="eduProf">Судовождение</td>
              <td itemProp="eduLevel" rowspan="4">
                среднее профессиональное образование
              </td>
              <td itemProp="napravNir">Судовождение</td>
              <td itemProp="resultNir" rowspan="4">
                Публикация статей в сборник ежегодной НПК преподавателей филиала
                «Инновационные технологии в преподавании дисциплин»; Участие в
                работе НПК, в том числе международного уровня (свыше 20
                публикаций); Защита кандидатской диссертации, публикация
                монографии; Участие в работе РУМО УГС 26.00.00; РУМО
                преподавателей БЖД и ОБЖ; Руководство исследовательской
                деятельностью курсантов – участников предметных и
                профессиональных олимпиад, конкурсов проф.мастерства
              </td>
              <td itemProp="baseNir" rowspan="4">
                Научно-образовательный портал Znanium (new.znanium.com)
                Электронно-библиотечная система "Лань" Электронная библиотечная
                система «Юрайт» biblio-online.ru Система дистанционного обучения
                «Парус» Комплект лицензионного программного обеспечения: •
                Операционные системы Windows XP, Windows 10, Windows 7 •
                Прикладные пакеты MS Office 2007; MS Office 2013 • Прикладные
                пакеты 1c:8.0, 1C:8.2, 1C:7.7; • Прикладные пакеты Finereader 7;
                • Прикладные пакеты Консультант плюс; • Прикладные пакеты
                WinRar; • Средства проектирования и разработки платформа 1С •
                Конфигурация 1С: АСУ Учебный процесс Компьютерная служба
                Компьютерный сервер Система видеоконференцсвязи Центр
                коллективного пользования информационным и коммуникационным
                оборудованием (компьютерные классы) Локальная сеть филиала
                Научно-образовательный центр (библиотека) Кабинет основ
                исследовательской деятельности Аудитория для проведения круглых
                столов, научных семинаров (музей им.В. Альбанова, каб.20)
              </td>
            </tr>
            <tr itemProp="eduNir">
              <td itemProp="eduCode">26.02.05</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок
              </td>
              <td itemProp="eduProf">
                Эксплуатация судовых энергетических установок
              </td>
              <td itemProp="napravNir">
                Эксплуатация судовых энергетических установок
              </td>
            </tr>
            <tr itemProp="eduNir">
              <td itemProp="eduCode">26.02.06</td>
              <td itemProp="eduName">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td itemProp="eduProf">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td itemProp="napravNir">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
            </tr>
            <tr itemProp="eduNir">
              <td itemProp="eduCode">26.02.01</td>
              <td itemProp="eduName">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td itemProp="eduProf">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td itemProp="napravNir">
                Организация перевозок и управление на транспорте (по видам)
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default Education;
