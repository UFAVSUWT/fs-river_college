import React from "react";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import inform_o_yaz from "../../../../assets/pdf/educationPage/inf_o_yazikah.pdf";
const InfoORealisUrovnyahObrazovaniya = () => {
  return (
    <>
      <TableWrapper
        itemProp="languageEl"
        title="Информация о реализуемых уровнях 
образования, о формах обучения, нормативных сроках 
обучения, сроке действия государственной 
аккредитации образовательной программы (при 
наличии государственной аккредитации), о языках, на 
которых осуществляется образование (обучение)
"
      >
        <table>
          <tbody>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">Код</td>
              <td itemProp="eduName">
                Наименование профессии, специальности, направления подготовки
              </td>
              <td itemProp="eduProf">
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduLevel">Уровень образования</td>
              <td itemProp="eduForm">Формы обучения</td>
              <td itemProp="learningTerm">Срок получения образования</td>
              <td itemProp="dateEnd">
                Срок действия государственной аккредитации (дата окончания
                действия свидетельства о государственной аккредитации)
              </td>
              <td itemProp="language">
                Языки, на которых осуществляется образование (обучение)
              </td>
              <td itemProp="eduCode">
                Учебные предметы, курсы, дисциплины (модули), предусмотренные
                соответствующей образовательной программой
              </td>
              <td itemProp="eduCode">
                Практики, предусмотренные соответствующей образовательной
                программой
              </td>
              <td itemProp="eduCode">
                Информация об использовании при реализации образовательных
                программ электронного обучения и дистанционных образовательных
                технологий
              </td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.05.06</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок ФГОС №192 от
                15.03.2018 (в ред. Приказа Минобранауки России от 26.11.2020
                №1456)
              </td>
              <td itemProp="eduProf">
                Эксплуатация судовых энергетических установок судов смешанного
                река-море плавания
              </td>
              <td itemProp="eduLevel">высшее образование-специалитет</td>
              <td itemProp="eduForm">Заочная</td>
              <td itemProp="learningTerm">6 лет</td>
              <td itemProp="dateEnd">-</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">В</td>
              <td itemProp="eduCode">В1</td>
              <td itemProp="eduCode">используются</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.03</td>
              <td itemProp="eduName">Судовождение ФГОС №441 от 07.05.2014</td>
              <td itemProp="eduProf">Судовождение (прием 2020)</td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="learningTerm">4 года 10 месяцев</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">1</td>
              <td itemProp="eduCode">5</td>
              <td itemProp="eduCode">Не используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.03</td>
              <td itemProp="eduName">
                Судовождение ФГОС №691 от 02.12.2020 (в ред. Приказа
                Минобранауки России от 13.07.2021 №450)
              </td>
              <td itemProp="eduProf">Судовождение (прием 2021, 2022, 2023)</td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="learningTerm">4 года 6 месяцев</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">1</td>
              <td itemProp="eduCode">5</td>
              <td itemProp="eduCode">Не используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.03</td>
              <td itemProp="eduName">
                Судовождение ФГОС №691 от 02.12.2020 (в ред. Приказа
                Минобранауки России от 13.07.2021 №450)
              </td>
              <td itemProp="eduProf">Судовождение (прием 2021, 2022, 2023)</td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Заочная</td>
              <td itemProp="learningTerm">4 года 4 месяца</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">1</td>
              <td itemProp="eduCode">5</td>
              <td itemProp="eduCode">Используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.03</td>
              <td itemProp="eduName">Судовождение ФГОС №441 от 07.05.2014</td>
              <td itemProp="eduProf">Судовождение (прием 2020)</td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Заочная</td>
              <td itemProp="learningTerm">4 года 4 месяца</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">1</td>
              <td itemProp="eduCode">5</td>
              <td itemProp="eduCode">Используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.05</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок ФГОС №674 от
                26.11.2020
              </td>
              <td itemProp="eduProf">
                Эксплуатация судовых энергетических установок (прием 2021, 2022,
                2023)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="learningTerm">3 года 10 месяцев</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">2</td>
              <td itemProp="eduCode">6</td>
              <td itemProp="eduCode">Не используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.05</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок ФГОС №674 от
                26.11.2020
              </td>
              <td itemProp="eduProf">
                Эксплуатация судовых энергетических установок (прием 2021, 2022)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Заочная</td>
              <td itemProp="learningTerm">3 года 4 месяца</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">2</td>
              <td itemProp="eduCode">6</td>
              <td itemProp="eduCode">Используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.05</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок ФГОС №443 от
                07.05.2014
              </td>
              <td itemProp="eduProf">
                Эксплуатация судовых энергетических установок (прием 2020)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Заочная</td>
              <td itemProp="learningTerm">3 года 4 месяца</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">2</td>
              <td itemProp="eduCode">6</td>
              <td itemProp="eduCode">Используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.05</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок ФГОС №443 от
                07.05.2014
              </td>
              <td itemProp="eduProf">
                Эксплуатация судовых энергетических установок (прием 2020)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="learningTerm">3 года 10 месяцев</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">2</td>
              <td itemProp="eduCode">6</td>
              <td itemProp="eduCode">Не используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.06</td>
              <td itemProp="eduName">
                Эксплуатация судового электрооборудования и средств автоматики
                ФГОС №675 от 26.11.2020
              </td>
              <td itemProp="eduProf">
                Эксплуатация судового электрооборудования и средств автоматики
                (прием 2021, 2022, 2023)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="learningTerm">3 года 10 месяцев</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">3</td>
              <td itemProp="eduCode">7</td>
              <td itemProp="eduCode">Не используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">26.02.06</td>
              <td itemProp="eduName">
                Эксплуатация судового электрооборудования и средств автоматики
                ФГОС №444 от 07.05.2014
              </td>
              <td itemProp="eduProf">
                Эксплуатация судового электрооборудования и средств автоматики
                (прием 2020)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="learningTerm">3 года 10 месяцев</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">3</td>
              <td itemProp="eduCode">7</td>
              <td itemProp="eduCode">Не используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">23.02.01</td>
              <td itemProp="eduName">
                Организация перевозок и управление на транспорте (по видам) ФГОС
                №376 от 22.04.2014 (в ред. Приказа Минобранауки России от
                13.07.2021 №450)
              </td>
              <td itemProp="eduProf">
                Организация перевозок и управление на транспорте (на водном
                транспорте) (прием 2020, 2021, 2022, 2023)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Очная</td>
              <td itemProp="learningTerm">3 года 10 месяцев</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">4</td>
              <td itemProp="eduCode">8</td>
              <td itemProp="eduCode">Не используется</td>
            </tr>
            <tr itemProp="eduAccred">
              <td itemProp="eduCode">23.02.01</td>
              <td itemProp="eduName">
                Организация перевозок и управление на транспорте (по видам) ФГОС
                №376 от 22.04.2014 (в ред. Приказа Минобранауки России от
                13.07.2021 №450)
              </td>
              <td itemProp="eduProf">
                Организация перевозок и управление на транспорте (на водном
                транспорте) (прием 2020, 2021, 2022, 2023)
              </td>
              <td itemProp="eduLevel">среднее профессиональное образование</td>
              <td itemProp="eduForm">Заочная</td>
              <td itemProp="learningTerm">3 года 4 месяца</td>
              <td itemProp="dateEnd">27 февраля 2025 г.</td>
              <td itemProp="language">русский</td>
              <td itemProp="eduCode">4</td>
              <td itemProp="eduCode">8</td>
              <td itemProp="eduCode">Используется</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <ul>
        <li>
          <PDF height={"25px"} width={"25px"} />
          <a
            itemProp="languageEl"
            href={inform_o_yaz}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о реализуемых уровнях образования, о формах обучения,
            нормативных сроках обучения, сроке действия государственной
            аккредитации образовательной программы (при наличии государственной
            аккредитации), о языках, на которых осуществляется образование
            (обучение)
          </a>
        </li>
      </ul>
    </>
  );
};
export default InfoORealisUrovnyahObrazovaniya;
