import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import pravila_priema from "../../../../assets/pdf/documentPage/local/1. Правила приема на обучение по образовательным программам среднего профессионального образования на 2023-24 учебный год.pdf";
import rejim_zanyatiy from "../../../../assets/pdf/documentPage/local/2. Режим занятий обучающихся.pdf";
import pravila_o_poryadke_sostav_raspis from "../../../../assets/pdf/documentPage/local/3. П. о порядке составления и исполнения расписания обуч.по уровню ВО.pdf";
import pravila_o_tek_kontrole_atest from "../../../../assets/pdf/documentPage/local/4. П. о текущем контроле и пром.аттестации.pdf";
import pravila_o_tek_kontrole_atest_dot from "../../../../assets/pdf/documentPage/local/5. П. о текущем контроле и промежуточ. аттестации обучающихся с применением ДОТ.PDF";
import pravila_ob_itog_atest from "../../../../assets/pdf/documentPage/local/6. П. об итоговой аттестации.pdf";
import pravila_ob_org_uch_proc from "../../../../assets/pdf/documentPage/local/7. П. об орг.учебного процесса для инвалидов и лиц с ОВЗ.pdf";
import pravila_o_perevode from "../../../../assets/pdf/documentPage/local/8. П. о переводе и восстановлении обучающихся.pdf";
import pravila_ob_otchis from "../../../../assets/pdf/documentPage/local/9. П. об отчислении обучающихся.pdf";
import pravila_priost_otn from "../../../../assets/pdf/documentPage/local/10. П.о порядке оформл, возникн., приост и прекр.отношений между ВГУВТ и обуч..pdf";
import pravila_vnutr_rasp from "../../../../assets/pdf/documentPage/local/11. Правила внутреннего распорядка обучающихся.pdf";
import pravila_org_sluzb from "../../../../assets/pdf/documentPage/local/12. Правила внутр.распорядка и орг-ции службы курсантов.pdf";
import HrLine from "../../../common/hrLine/HrLine";
import poloz1 from "../../../../assets/pdf/documentPage/Для акредитации/ПЛЖ о внутренней оценке качества образоват.деят..pdf";
import poloz4 from "../../../../assets/pdf/documentPage/Для акредитации/Приказ ВГУВТ О проведении ВОКО № 534-с от 05.12.22.pdf";
import poloz5 from "../../../../assets/pdf/documentPage/Для акредитации/Приказ Уф.ф. О назначении ответственных за ВОКО №299 от 27.09.22.PDF";
import poloz6 from "../../../../assets/pdf/documentPage/Для акредитации/Приказ Уф.ф. О проведении ВОКО №361 от 07.12.22.PDF";
import vokoSudovojd from "../../../../assets/pdf/documentPage/local/Отчет по ВОКО 26.02.03 Судовождение.pdf";
import vokoElectrooborud from "../../../../assets/pdf/documentPage/local/Отчет по ВОКО 26.02.06 Эксплуатация судового электрооборудования и средств автоматики.pdf";
import vokoEnerg from "../../../../assets/pdf/documentPage/local/Отчет по ВОКО 26.02.05 Эксплуатация судовых энергетических установок.pdf";
import poryadok from "../../../../assets/pdf/documentPage/local/13. Порядок организации дистанционной работы и взаимодействия дистанционного работника и работодателя.pdf";
import prav_trud from "../../../../assets/pdf/documentPage/local/14. 00000000510.pdf";
import pol_ob_okaz_platn from "../../../../assets/pdf/documentPage/local/15. Положение об оказании платных услуг по программамВО_СПО_Приказ 48 от 08.04.2022.pdf";
import prikaz_stoim from "../../../../assets/pdf/documentPage/local/16. Приказ о стоимости обучения на 2023-2024 учебный год в университете и его филиалах.pdf";
import prikaz17 from "../../../../assets/pdf/documentPage/local/17. Приказ.pdf";
import pril_k_prikazu from "../../../../assets/pdf/documentPage/local/18. Изменение к приказу Приложение на 2023-2024 уч год.docx";
import poloj_o_vneuch from "../../../../assets/pdf/documentPage/local/18. 00000000228.pdf";
import poloj_o_dist from "../../../../assets/pdf/documentPage/local/19. 00000000685.pdf";
import poloj_o_dist_dpo from "../../../../assets/pdf/documentPage/local/20. 00000000456.pdf";
import pol_o_dop_obr from "../../../../assets/pdf/documentPage/local/21. 00000000706.pdf";

import pol_o_perezach from "../../../../assets/pdf/documentPage/local/23. Положение о перезачете (переаттестации) изученных учебных дисциплин.pdf";
import pol_o_plan from "../../../../assets/pdf/documentPage/local/24. 00000000409.pdf";
import prikaz107 from "../../../../assets/pdf/documentPage/local/25. Приказ 107 от 05.07.2022.pdf";
import prim_dist from "../../../../assets/pdf/documentPage/local/26. 199402560.pdf";
import pol_o_por_prim from "../../../../assets/pdf/documentPage/local/27. 00000000815.pdf";
import pol_o_por from "../../../../assets/pdf/documentPage/local/28. 00000000430.pdf";
import pol_o_por_uscor from "../../../../assets/pdf/documentPage/local/29. Положение о порядке ускоренного обучения по индивидуальному плану.pdf";
import proh_o_prakt from "../../../../assets/pdf/documentPage/local/30. 00000000795.pdf";
import Polozheniew from "../../../../assets/pdf/documentPage/local/31. Polozheniew.pdf";
import neschastn from "../../../../assets/pdf/documentPage/local/32. 00000000689.pdf";
import akad_otp from "../../../../assets/pdf/documentPage/local/33. Положение об академическом отпуске.pdf";
import indiv_uch from "../../../../assets/pdf/documentPage/local/34. Положение об индивидуальном учебном плане.pdf";
import samost from "../../../../assets/pdf/documentPage/local/35. 00000000816.pdf";
import vneuch_mer from "../../../../assets/pdf/documentPage/local/36. 00000000440.pdf";
import inval from "../../../../assets/pdf/documentPage/local/37. 00000000824.pdf";
import ohran from "../../../../assets/pdf/documentPage/local/38. 00000000688.pdf";
import pol_ob_organiz from "../../../../assets/pdf/documentPage/local/39. 00000000503.pdf";
import obr_osn_prorg from "../../../../assets/pdf/documentPage/local/40. Положение об основной образовательной программе.pdf";
import uscor from "../../../../assets/pdf/documentPage/local/41. 00000000443.pdf";
import korupc from "../../../../assets/pdf/documentPage/local/42. 00000000682.pdf";
import kodecs from "../../../../assets/pdf/documentPage/local/43. 00000000216.doc";
import zamesh from "../../../../assets/pdf/documentPage/local/44. Положение о замещении должностей педагогических работников, относящихся к ППС.pdf";
import vid_deyat from "../../../../assets/pdf/documentPage/local/45. Положение о виде деятельности о порядке планирования нагрузки.pdf";
import por_attest from "../../../../assets/pdf/documentPage/local/46. Положение о порядке аттестации работников ФГБОУ ВО ВГУВТ.pdf";
import pol_o_reyt from "../../../../assets/pdf/documentPage/local/47. ПОЛОЖЕНИЕ О РЕЙТИНГЕ 21_ИЗМ._ПРИЛОЖЕНИЯ А_8_8.1-8.5_ 21.09.2022.pdf";
import pol_ob_attest from "../../../../assets/pdf/documentPage/local/49. 00000000692.pdf";
import indiv_plan from "../../../../assets/pdf/documentPage/local/50. Положение об индивидуальном плане работы преподавателя по образовательным программам высшего образования.pdf";
import pol_ob_opl from "../../../../assets/pdf/documentPage/local/51. Положение об оплате и стимулировании труда работников ФГБОУ ВО ВГУВТ.pdf";
import opl_sotr from "../../../../assets/pdf/documentPage/local/52. 00000000751.pdf";
import ef_kontr from "../../../../assets/pdf/documentPage/local/53. 00000000747.pdf";
import por_org from "../../../../assets/pdf/documentPage/local/54. Порядок организации дистанционной работы и взаимодействия дистанционного работника и работодателя.pdf";
import uch_nagr from "../../../../assets/pdf/documentPage/local/55. 1631004321909379.pdf";
import pol_o_sist from "../../../../assets/pdf/documentPage/local/56. Положение о системе поощрения работников.pdf";
import izm_v_pol from "../../../../assets/pdf/documentPage/local/57. Изменение в положение о системе поощрения работников.pdf";
import perev from "../../../../assets/pdf/documentPage/local/58. Положение о комиссии по переводу обучающихся с платного обучения на бесплатное_compressed.pdf";
import ureg_konfl from "../../../../assets/pdf/documentPage/local/59. 1621430308425005.pdf";
import pol_o_kom from "../../../../assets/pdf/documentPage/local/60. 00000000423.pdf";
import konk_kom from "../../../../assets/pdf/documentPage/local/61. Положение о конкурсной комиссии и порядке проведения конкурсов на замещение вакантных должностей.pdf";
import pol_o_priemn from "../../../../assets/pdf/documentPage/local/62. 00000000574.pdf";
import vokoPerev from "../../../../assets/pdf/documentPage/local/Отчет по ВОКО 23.02.01 Организация перевозок и управление на транспорте.pdf";

const LocalActs = ({ isActive }) => {
  return (
    <>
      <div className={`${!isActive ? "doc_item-show" : "doc_item-hidden"}`}>
        <p>Документы, регламентирующие правила приема обучающихся</p>
        <ul>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              itemProp="priemDocLink"
              href={pravila_priema}
              target={"_blank"}
              rel="noreferrer"
            >
              Правила приема на обучение по образовательным программам среднего
              профессионального образования
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>Документы, регламентирующие режим занятий обучающихся</p>
        <ul>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              itemProp="modeDocLink"
              href={rejim_zanyatiy}
              target={"_blank"}
              rel="noreferrer"
            >
              Режим занятий обучающихся
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_o_poryadke_sostav_raspis}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение о порядке составления и исполнения расписания и контроле
              учебных занятий обучающихся по уровню ВО
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>
          Документы, регламентирующие формы, периодичность и порядок текущего
          контроля успеваемости и промежуточной аттестации обучающихся
        </p>
        <ul>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_o_tek_kontrole_atest}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение о проведении текущего контроля и промежуточной
              аттестации
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_o_tek_kontrole_atest_dot}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение о текущем контроле и промежуточной аттестации
              обучающихся с применением дистанционных образовательных технологий
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_ob_itog_atest} target={"_blank"} rel="noreferrer">
              Положение об итоговой аттестации
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_ob_org_uch_proc}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение об организации учебного процесса для инвалидов и лиц с
              ОВЗ
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>
          Документы, регламентирующие порядок и основания перевода, отчисления и
          восстановления обучающихся
        </p>
        <ul>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_o_perevode} target={"_blank"} rel="noreferrer">
              Положение о переводе и восстановлении обучающихся
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_ob_otchis} target={"_blank"} rel="noreferrer">
              Положение об отчислении обучающихся
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>
          Документы, регламентирующие порядок оформления возникновения,
          приостановления и прекращения отношений между образовательной
          организацией, обучающимися и (или) родителями (законными
          представителями) несовершеннолетних обучающихся
        </p>
        <ul>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_priost_otn} target={"_blank"} rel="noreferrer">
              Положение о порядке оформления, возникновения, приостановления и
              прекращения отношений между ФГБОУ ВО ВГУВТ и обучающимися и(или)
              родителями
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>Правила внутреннего распорядка обучающихся</p>
        <ul>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_vnutr_rasp} target={"_blank"} rel="noreferrer">
              Правила внутреннего распорядка обучающихся
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_org_sluzb} target={"_blank"} rel="noreferrer">
              Правила внутреннего распорядка и организации службы курсантов
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>Внутренняя оценка качества образования</p>
        <ul>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={vokoSudovojd} target={"_blank"} rel="noreferrer">
              Отчет по ВОКО 26.02.03 Судовождение
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={vokoEnerg} target={"_blank"} rel="noreferrer">
              Отчет по ВОКО 26.02.05 Эксплуатация судовых энергетических
              установок
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={vokoElectrooborud} target={"_blank"} rel="noreferrer">
              Отчет по ВОКО 26.02.06 Эксплуатация судового электрооборудования и
              средств автоматики
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={vokoPerev} target={"_blank"} rel="noreferrer">
              Отчет по ВОКО 23.02.01 Организация перевозок и управление на
              транспорте
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poloz1} target={"_blank"} rel="noreferrer">
              Положение о внутренней оценке качества образовательной
              деятельности
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poloz4} target={"_blank"} rel="noreferrer">
              Приказ ВГУВТ О проведении ВОКО № 534-с от 05.12.22
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poloz5} target={"_blank"} rel="noreferrer">
              Приказ Уф.ф. О назначении ответственных за ВОКО №299 от 27.09.22
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poloz6} target={"_blank"} rel="noreferrer">
              Приказ Уф.ф. О проведении ВОКО №361 от 07.12.22
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>Правила внутреннего трудового распорядка сотрудников</p>
        <ul>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poryadok} target={"_blank"} rel="noreferrer">
              Порядок организации дистанционной работы и взаимодействия
              дистанционного работника и работодателя
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={prav_trud} target={"_blank"} rel="noreferrer">
              Правила внутреннего трудового распорядка ФГБОУ ВО ВГУВТ
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>ДОКУМЕНТЫ, РЕГЛАМЕНТИРУЮЩИЕ ОКАЗАНИЕ ПЛАТНЫХ УСЛУГ</p>
        <ul>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_ob_okaz_platn} target={"_blank"} rel="noreferrer">
              Положение об оказании платных услуг образовательных услуг по
              образовательным программам высшего и среднего профессионального
              образования
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={prikaz_stoim} target={"_blank"} rel="noreferrer">
              Приказ №176-с от 18.04.2023 «О стоимости обучения на 2023-2024
              учебный год в университете и его филиалах»
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={prikaz17} target={"_blank"} rel="noreferrer">
              Приказ 281-с от 04.07.2023 Изменение к приказу от 18.04.2023
              №176-с «О стоимости обучения на 2023-2024 учебный год в
              университете и его филиалах
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pril_k_prikazu} target={"_blank"} rel="noreferrer">
              Изменения к приказу о стоимости обучения
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>
          ДОКУМЕНТЫ, РЕГЛАМЕНТИРУЮЩИЕ УЧЕБНУЮ И ВОСПИТАТЕЛЬНУЮ РАБОТУ,
          МЕТОДИЧЕСКИЕ ДОКУМЕНТЫ, РАЗРАБОТАННЫЕ ДЛЯ ОБРАЗОВАТЕЛЬНОГО ПРОЦЕССА
        </p>
        <ul>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poloj_o_vneuch} target={"_blank"} rel="noreferrer">
              Положение о внеучебной (воспитательной) работе с обучающимися
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poloj_o_dist} target={"_blank"} rel="noreferrer">
              Положение о дистанционном обучении
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={poloj_o_dist_dpo} target={"_blank"} rel="noreferrer">
              Положение о дистанционном обучении по ДПО
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_dop_obr} target={"_blank"} rel="noreferrer">
              Положение о дополнительном профессиональном образовании
            </a>
          </li>
          {/*  <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_komis} target={"_blank"} rel="noreferrer">
              Положение о комиссии по переводу студентов с платного обучения на
              бесплатное
            </a>
          </li> */}
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_perezach} target={"_blank"} rel="noreferrer">
              Положение о переаттестации и перезачете изученных учебных
              дисциплин, пройденных практик, выполненных научных исследований
              при переводе в ФГБОУ ВО ВГУВТ
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_plan} target={"_blank"} rel="noreferrer">
              Положение о планировании реализации образовательного модуля
              привития лидерских качеств и командных навыков
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={prikaz107} target={"_blank"} rel="noreferrer">
              Положение о порядке организации и осуществления образовательной
              деятельности по образовательным программам высшего образования -
              программам бакалавриата, специалитета и магистратуры
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={prim_dist} target={"_blank"} rel="noreferrer">
              Положение о порядке применения дистанционных образовательных
              технологий и электронного обучения при реализации программ
              дополнительного образования детей и взрослых, дополнительного
              профессионального образования и профессионального обучения
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_por_prim} target={"_blank"} rel="noreferrer">
              Положение о порядке проведения и объеме учебных занятий по
              физической культуре
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_por} target={"_blank"} rel="noreferrer">
              Положение о порядке реализации права обучающихся на посещение по
              своему выбору мероприятий, не предусмотренных учебным планом,
              проводимых университеом
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_por_uscor} target={"_blank"} rel="noreferrer">
              Положение о порядке ускоренного обучения по индивидуальному плану
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={proh_o_prakt} target={"_blank"} rel="noreferrer">
              Положение о прохождении практики курсантами, обучающимися по
              специальностям подготовки плавсостава судов (СПО)
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={Polozheniew} target={"_blank"} rel="noreferrer">
              Положение о прохождении практик обучающимися неплавательных
              специальностей
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={neschastn} target={"_blank"} rel="noreferrer">
              Положение о расследовании и учета несчастных случаев с
              обучающимися ФГБОУ ВО ВГУВТ
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={akad_otp} target={"_blank"} rel="noreferrer">
              Положение об академическом отпуске
            </a>
          </li>

          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={indiv_uch} target={"_blank"} rel="noreferrer">
              Положение об индивидуальном учебном плане
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={samost} target={"_blank"} rel="noreferrer">
              Положение об организации внеаудиторной (самостоятельной) работе
              студентов
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={vneuch_mer} target={"_blank"} rel="noreferrer">
              Положение об организации и проведении внеучебных мероприятий с
              обучающимися
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={inval} target={"_blank"} rel="noreferrer">
              Положение об организации образовательного процесса для инвалидов и
              лиц с ограниченными возможностями здоровья
            </a>
          </li>

          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={ohran} target={"_blank"} rel="noreferrer">
              Положение об организации охраны здоровья обучающихся
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_ob_organiz} target={"_blank"} rel="noreferrer">
              Положение об организации учебного процесса
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={obr_osn_prorg} target={"_blank"} rel="noreferrer">
              Положение об основной образовательной программе
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={uscor} target={"_blank"} rel="noreferrer">
              Положение об ускоренной подготовке и параллельном обучении
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pril_k_prikazu} target={"_blank"} rel="noreferrer">
              Положение об экзамене по профессиональному модулю
            </a>
          </li>

          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={korupc} target={"_blank"} rel="noreferrer">
              Антикоррупционный стандарт
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={kodecs} target={"_blank"} rel="noreferrer">
              Кодекс корпоративной этики работников и обучающихся
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={zamesh} target={"_blank"} rel="noreferrer">
              Положение о замещении должностей педагогических работников,
              относящихся к ППС
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={vid_deyat} target={"_blank"} rel="noreferrer">
              Положение о порядке планирования нагрузки, выполняемой
              профессорско-преподавательским составом и педагогическими
              работниками университета по образовательным программам среднего
              профессионального и высшего образования
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={por_attest} target={"_blank"} rel="noreferrer">
              Положение о порядке проведения аттестации работников
            </a>
          </li>

          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_reyt} target={"_blank"} rel="noreferrer">
              Положение о рейтинговой системе оценки деятельности
              профессорско-преподавательского состава и педагогических
              работников университета
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_ob_attest} target={"_blank"} rel="noreferrer">
              Положение об аттестации педагогических работников структурных
              подразделенй ФГБОУ ВО ВГУВТ, реализующих программы СПО
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={indiv_plan} target={"_blank"} rel="noreferrer">
              Положение об индивидуальном плане работы преподавателя по
              образовательным программам высшего образования
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_ob_opl} target={"_blank"} rel="noreferrer">
              Положение об оплате и стимулировании труда работников ВГУВТ
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={opl_sotr} target={"_blank"} rel="noreferrer">
              Положение об оплате труда работников ФГБОУ ВО ВГУВТ
            </a>
          </li>

          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={ef_kontr} target={"_blank"} rel="noreferrer">
              Положение об эффективном контракте
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={por_org} target={"_blank"} rel="noreferrer">
              Порядок организации дистанционной работы и взаимодействия
              дистанционного работника и работодателя
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={uch_nagr} target={"_blank"} rel="noreferrer">
              Приказ об установлении учебной нагрузки на ставки по должностям
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_sist} target={"_blank"} rel="noreferrer">
              Положение о системе поощрения работников
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={izm_v_pol} target={"_blank"} rel="noreferrer">
              Изменение в положение о системе поощрения работников
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>ДОКУМЕНТЫ, РЕГЛАМЕНТИРУЮЩИЕ РАБОТУ КОМИССИЙ</p>
        <ul>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={perev} target={"_blank"} rel="noreferrer">
              Положение о комиссии по переводу студентов с платного обучения на
              бесплатное
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={ureg_konfl} target={"_blank"} rel="noreferrer">
              Положение о комиссии по предотвращению и урегулированию конфликтов
              интересов
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_kom} target={"_blank"} rel="noreferrer">
              Положение о комиссии по урегулированию споров между участниками
              образовательных отношений
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={konk_kom} target={"_blank"} rel="noreferrer">
              Положение о конкурсной комиссии и порядке проведения конкурсов на
              замещение вакантных должностей
            </a>
          </li>
          <li itemProp="localActStud" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pol_o_priemn} target={"_blank"} rel="noreferrer">
              Положение о приемной, экзаменационной, апелляционной комиссиях
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
LocalActs.propTypes = {
  isActive: PropTypes.bool,
};
export default LocalActs;
