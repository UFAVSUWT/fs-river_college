import React from "react";
import PropTypes from "prop-types";
import Ustav from "../../../../assets/pdf/documentPage/Ustav_2017.pdf";
import UstavChange1415 from "../../../../assets/pdf/documentPage/rasp_ustav_2015.pdf";
import UstavChange17 from "../../../../assets/pdf/documentPage/rasp_ustav_2017.pdf";
import UstavChange18 from "../../../../assets/pdf/documentPage/rasp_ustav_2018.pdf";
import UstavChange19 from "../../../../assets/pdf/documentPage/rasp_ustav_2019.pdf";
import UstavChange21 from "../../../../assets/pdf/documentPage/rasp_ustav_2021.pdf";
import UstavChange23 from "../../../../assets/pdf/documentPage/Изменения в устав от 08.09.2023.pdf";
import listZapisi from "../../../../assets/pdf/documentPage/Лист записи от 08.09.2023.pdf";
import Pologen22 from "../../../../assets/pdf/documentPage/Pologen_2022.pdf";
import Pologen22Dop from "../../../../assets/pdf/documentPage/Pologen_dop.pdf";
import LicenzVip from "../../../../assets/pdf/documentPage/Выписка из реестра лицензий по состоянию на 04.07.2023 г..pdf";

import AkrVsuwt from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019.pdf";
import AkrVsuwtPril1 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril1.pdf";
import AkrVsuwtPril2 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril2.pdf";
import AkrVsuwtPril3 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril3.pdf";
import AkrVsuwtPril4 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril4.pdf";
import AkrVsuwtPril5 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril5.pdf";
import AkrVsuwtPril6 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril6.pdf";
import AkrVsuwtPril9 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril9.pdf";
import AkrVsuwtPril10 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril10.pdf";
import AkrVsuwtPril12 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_pril12.pdf";
import AkrVsuwtPril13 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_pril13.pdf";
import Prikaz706 from "../../../../assets/pdf/documentPage/Prikaz706.pdf";
import Prikaz734 from "../../../../assets/pdf/documentPage/Prikaz734.pdf";
import Prikaz950 from "../../../../assets/pdf/documentPage/Prikaz950.pdf";

import Plan_FHD_2023 from "../../../../assets/doc/documentPage/План ФХД 2023г. от 30.06.2023.docx";

import PolozOvz from "../../../../assets/pdf/documentPage/Pologenie_ucheb_prozess_ovz_2017.pdf";
import PolozPromItog from "../../../../assets/pdf/documentPage/Pologenie_promegut_itogov_attest2017.pdf";
import Pologenie_GIA from "../../../../assets/pdf/documentPage/Pologenie_GIA.pdf";
import Perev21 from "../../../../assets/pdf/documentPage/Perevod_UF_2021.pdf";
import Otchisl21 from "../../../../assets/pdf/documentPage/Otchisl_UF_2021.pdf";

import Otchisl17 from "../../../../assets/pdf/documentPage/Otnoshenie_2017.pdf";

import TrudRasp17 from "../../../../assets/pdf/documentPage/Pravila_trud_rasporyadka_2017.pdf";
import KolDogov from "../../../../assets/pdf/documentPage/Kol_dogovor_2017.pdf";
import KolDogovPril from "../../../../assets/pdf/documentPage/Pril_kol_dogovor_2017.pdf";
import KolDogovDop from "../../../../assets/pdf/documentPage/kol_dogovor_dop.pdf";
import SamoobsOrchet19 from "../../../../assets/pdf/documentPage/othet_o_samoobsledovanii_2019.pdf";
import SamoobsOrchet20 from "../../../../assets/pdf/documentPage/othet_o_samoobsledovanii_2020.pdf";
import SamoobsOrchet21 from "../../../../assets/pdf/documentPage/othet_o_samoobsledovanii_2021.pdf";
import SamoobsOrchet22 from "../../../../assets/pdf/documentPage/othet_o_samoobsledovanii_2022.pdf";

import PoryadPlatnUslug from "../../../../assets/pdf/documentPage/Poryadok_platn_uslug.pdf";
import PoryadPlatnObrUslug21 from "../../../../assets/pdf/documentPage/Dogovor_platn_obraz_uslug_2021.pdf";
import StoimObuch22 from "../../../../assets/pdf/documentPage/Stoimost_obuch_2022.pdf";
import OplProzivan from "../../../../assets/pdf/documentPage/Poryadoc_oplati.pdf";
import smeta from "../../../../assets/pdf/documentPage/сметы на общежитие.pdf";
import PolStDorm18 from "../../../../assets/pdf/documentPage/Pol_st_dorm_2024.pdf";
import Predpis from "../../../../assets/pdf/documentPage/predpisanie_transp_prok1.pdf";
import PismoTransp from "../../../../assets/pdf/documentPage/pismo_transp_prok_2020.pdf";

import Pismo_pozh from "../../../../assets/pdf/documentPage/pismo_pozh.pdf";
import Zakl_pozh2 from "../../../../assets/pdf/documentPage/zakl_pozh_2.pdf";
import Zakl_pozh3 from "../../../../assets/pdf/documentPage/zakl_pozh_3.pdf";
import ZaklSanitar1 from "../../../../assets/pdf/documentPage/zakl_sanitar_1.pdf";
import ZaklSanitar2 from "../../../../assets/pdf/documentPage/zakl_sanitar_2.pdf";
import ZaklSanitar3 from "../../../../assets/pdf/documentPage/zakl_sanitar_3.pdf";
import ZaklSanitar5 from "../../../../assets/pdf/documentPage/zakl_sanitar_5.pdf";
import DoDop from "../../../../assets/pdf/documentPage/DO_dop.pdf";
import PolozPd from "../../../../assets/pdf/documentPage/Pologenie_PD.pdf";
import DropDown from "../../../common/dropDown/DropDown";

import vipiska_iz_reestra11042023 from "../../../../assets/pdf/documentPage/vipiska_iz_reestra11.04.2023.pdf";
import SEZ_predreisovaya from "../../../../assets/pdf/documentPage/SEZ_predreisovaya.pdf";
import polojenie_ob_electron_obr_srede from "../../../../assets/pdf/documentPage/ПЛЖ об ЭИОС 2017.pdf";

import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import { ReactComponent as DOC } from "../../../../assets/svg/office/word.svg";
import { toggleClassName } from "../../../../utils/disabled";
import HrLine from "../../../common/hrLine/HrLine";
const MainDocs = ({ isActive }) => {
  return (
    <>
      <div className={`${isActive ? "doc_item-show" : "doc_item-hidden"}`}>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Уставные документы"}
        >
          <ul>
            <li itemProp="ustavDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Ustav} target={"_blank"} rel="noreferrer">
                Устав
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={UstavChange23} target={"_blank"} rel="noreferrer">
                Распоряжение о внесении изменений в Устав от 08.09.2023г
                3Д-320-р
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={UstavChange21} target={"_blank"} rel="noreferrer">
                Распоряжение о внесении изменений в Устав 2021 - №АЛ-344-р от
                11.08.2021
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={UstavChange19} target={"_blank"} rel="noreferrer">
                Распоряжение в внесении изменений в Устав 2019 - №ЮЦ-55-р от
                04.03.19
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={UstavChange18} target={"_blank"} rel="noreferrer">
                Распоряжение в внесении изменений в Устав 2018
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={UstavChange17} target={"_blank"} rel="noreferrer">
                Распоряжение о внесении изменений в Устав 2017
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={UstavChange1415} target={"_blank"} rel="noreferrer">
                Распоряжение о внесении изменений в Устав 2014,2015
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={listZapisi} target={"_blank"} rel="noreferrer">
                Лист записи ЕГРЮЛ о внесении изменений в Устав 2023 года
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Pologen22} target={"_blank"} rel="noreferrer">
                Положение о филиале{" "}
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Pologen22Dop} target={"_blank"} rel="noreferrer">
                Изменения в Положение о филиале (приказ №42 от 01.04.2022)
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Свидетельство об аккредитации и лицензиях"}
        >
          <ul>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={LicenzVip} target={"_blank"} rel="noreferrer">
                Выписка из реестра лицензий Федеральной службы по надзору в
                сфере образования и науки (4.07.2023)
              </a>
            </li>
          </ul>

          <ul>
            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwt} target={"_blank"} rel="noreferrer">
                Свидетельство о государственной аккредитации № 2998 от
                27.02.2019 (ВГУВТ)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril1} target={"_blank"} rel="noreferrer">
                Приложение №1 к свидетельству о государственной аккредитации
                (ВГУВТ)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril2} target={"_blank"} rel="noreferrer">
                Приложение №2 к свидетельству о государственной аккредитации
                (Казанский филиал)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril3} target={"_blank"} rel="noreferrer">
                Приложение №3 к свидетельству о государственной аккредитации
                (Каспийский институт морского и речного транспорта, филиал
                ВГУВТ)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril4} target={"_blank"} rel="noreferrer">
                Приложение №4 к свидетельству о государственной аккредитации
                (Пермский филиал)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril5} target={"_blank"} rel="noreferrer">
                Приложение №5 к свидетельству о государственной аккредитации
                (Рыбинский филиал)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril6} target={"_blank"} rel="noreferrer">
                Приложение №6 к свидетельству о государственной аккредитации
                (Уфимский филиал)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <a href={AkrVsuwtPril9} target={"_blank"} rel="noreferrer">
                Приложение №9 к свидетельству о государственной аккредитации
                (Магистратура ВГУВТ, Юриспруденция)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril10} target={"_blank"} rel="noreferrer">
                Приложение №10 к свидетельству о государственной аккредитации
                (Уфимский филиал, ОП)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril12} target={"_blank"} rel="noreferrer">
                Приложение №12 к свидетельству о государственной аккредитации
                (ВГУВТ)
              </a>
            </li>

            <li itemProp="accreditationDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={AkrVsuwtPril13} target={"_blank"} rel="noreferrer">
                Приложение №13 к свидетельству о государственной аккредитации
                (Пермский филиал)
              </a>
            </li>

            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Prikaz706} target={"_blank"} rel="noreferrer">
                Приказ Рособрнадзора №706 от 29.06.2020 "О переоформлении
                свидетельства о государственной аккредитации образовательной
                деятельности ФГБОУ ВО "ВГУВТ"
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Prikaz734} target={"_blank"} rel="noreferrer">
                Приказ Рособрнадзора №734 от 28.05.2021 "О переоформлении
                свидетельства о государственной аккредитации образовательной
                деятельности ФГБОУ ВО "ВГУВТ"
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Prikaz950} target={"_blank"} rel="noreferrer">
                Приказ Рособрнадзора №950 от 09.07.2021 "О переоформлении
                свидетельства о государственной аккредитации образовательной
                деятельности ФГБОУ ВО "ВГУВТ"
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"План ФХД"}
        >
          <ul>
            <li className="doc__item">
              <DOC height={"40px"} width={"40px"} />
              <a href={Plan_FHD_2023} target={"_blank"} rel="noreferrer">
                План финансово-хозяйственной деятельности
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={
            "Локальные акты, регламентирующие образовательную деятельность"
          }
        >
          <h3
            className={`common__container-title ${toggleClassName(
              "title",
              "title-white",
              "title-black",
              "title-contrast"
            )}`}
          >
            Документы, регламентирующие формы, периодичность и порядок текущего
            контроля успеваемости и промежуточной аттестации обучающихся
          </h3>
          <HrLine className="document__hrLine" />
          <ul>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={PolozOvz} target={"_blank"} rel="noreferrer">
                Положение об организации учебного процесса для инвалидов и лиц с
                ограниченными возможностями здоровья
              </a>
            </li>
            <li itemProp="tekKontrolDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={PolozPromItog} target={"_blank"} rel="noreferrer">
                Положение о проведении текущего контроля и промежуточной
                аттестации обучающихся
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Pologenie_GIA} target={"_blank"} rel="noreferrer">
                Положение об итоговой аттестации выпускников
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={DoDop} target={"_blank"} rel="noreferrer">
                Положение о порядке применения дистанционных образовательных
                технологий и электронного обучения при реализации программ
                дополнительного образования детей и взрослых, дополнительного
                профессионального образования и профессионального обучения
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a
                href={polojenie_ob_electron_obr_srede}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение об электронной информационно-образовательной среде
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Перевод и восстановление"}
        >
          <ul>
            <li itemProp="perevodDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Perev21} target={"_blank"} rel="noreferrer">
                Положение о переводе и восстановлении обучающихся
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Otchisl21} target={"_blank"} rel="noreferrer">
                Положение об отчислении обучающихся{" "}
              </a>
            </li>
            <li style={{ backgroundColor: "red" }} className="doc__item">
              <a href={"/"} target={"_blank"} rel="noreferrer">
                {console.log("Исправь ссылку")}
                Информация о результатах перевода, восстановления и отчисления
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Локальные акты, регламентирующие трудовую деятельность"}
        >
          <ul>
            <li itemProp="vozDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a
                itemProp="vozDocLink"
                href={Otchisl17}
                target={"_blank"}
                rel="noreferrer"
              >
                Порядок оформления возникновения, приостановления и прекращения
                отношений между образовательной организацией и обучающимися и
                (или) родителями (законными представителями) несовершеннолетних
                обучающихся
              </a>
            </li>
          </ul>
          <HrLine className="document__hrLine" />
          <ul>
            <li itemProp="localActOrder" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={TrudRasp17} target={"_blank"} rel="noreferrer">
                Правила внутреннего трудового распорядка
              </a>
            </li>
          </ul>
          <HrLine className="document__hrLine" />
          <ul>
            <li itemProp="localActCollec" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={KolDogov} target={"_blank"} rel="noreferrer">
                Коллективный договор
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={KolDogovPril} target={"_blank"} rel="noreferrer">
                Приложение к коллективному договору{" "}
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={KolDogovDop} target={"_blank"} rel="noreferrer">
                Доп соглашение к коллективному договору
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={PolozPd} target={"_blank"} rel="noreferrer">
                Положение о защите персональных данных
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Отчеты о самообследовании"}
        >
          <ul>
            <li itemProp="reportEduDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={SamoobsOrchet22} target={"_blank"} rel="noreferrer">
                Отчет о результатах самообследования Уфимского филиала ФГБОУ ВО
                "ВГУВТ" за 2022 год
              </a>
            </li>
            <li itemProp="reportEduDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={SamoobsOrchet21} target={"_blank"} rel="noreferrer">
                Отчет о результатах самообследования Уфимского филиала ФГБОУ ВО
                "ВГУВТ" за 2021 год
              </a>
            </li>
            <li itemProp="reportEduDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={SamoobsOrchet20} target={"_blank"} rel="noreferrer">
                Отчет о результатах самообследования Уфимского филиала ФГБОУ ВО
                "ВГУВТ" за 2020 год
              </a>
            </li>
            <li itemProp="reportEduDocLink" className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={SamoobsOrchet19} target={"_blank"} rel="noreferrer">
                Отчет о результатах самообследования Уфимского филиала ФГБОУ ВО
                "ВГУВТ" за 2019 год
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Платные услуги"}
        >
          <ul>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={PoryadPlatnUslug} target={"_blank"} rel="noreferrer">
                Положение об оказании платных образовательных услуг
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a
                href={PoryadPlatnObrUslug21}
                target={"_blank"}
                rel="noreferrer"
              >
                Образец договора об оказании платных образовательных услуг
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={StoimObuch22} target={"_blank"} rel="noreferrer">
                Документ об утверждении стоимости обучения по каждой
                образовательной программе
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Общежитие"}
        >
          <ul>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={OplProzivan} target={"_blank"} rel="noreferrer">
                Документ об установлении размера платы, взимаемой с родителей
                (законных представителей) за присмотр и уход за детьми,
                осваивающими образовательные программы дошкольного образования в
                организациях, осуществляющих образовательную деятельность, за
                содержание детей в образовательной организации, реализующей
                образовательные программы начального общего, основного общего
                или среднего общего образования, если в такой образовательной
                организации созданы условия для проживания обучающихся в
                интернате, либо за осуществление присмотра и ухода за детьми в
                группах продленного дня в образовательной организации,
                реализующей образовательные программы начального общего,
                основного общего или среднего общего образования.
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={smeta} target={"_blank"} rel="noreferrer">
                Смета стоимости проживания в общежитии с 01.01.2023
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={PolStDorm18} target={"_blank"} rel="noreferrer">
                Положение о студенческом общежитии
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Предписания и отчеты"}
        >
          <h3
            className={`common__container-title ${toggleClassName(
              "title",
              "title-white",
              "title-black",
              "title-contrast"
            )}`}
          >
            Предписания органов, осуществляющих государственный контроль в сфере
            образования и отчеты об их исполнении:
          </h3>
          <ul>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a
                itemProp="prescriptionDocLink"
                href={Predpis}
                target={"_blank"}
                rel="noreferrer"
              >
                Предписание Уфимской транспортной прокуратуры № 23/1-5-2020 от
                09.09.2020
              </a>
            </li>
          </ul>
          <HrLine className="document__hrLine" />
          <h3
            className={`common__container-title ${toggleClassName(
              "title",
              "title-white",
              "title-black",
              "title-contrast"
            )}`}
          >
            Отчет об исполнении Предписаний:
          </h3>
          <ul>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={PismoTransp} target={"_blank"} rel="noreferrer">
                Письмо на предписание Уфимской транспортной прокуратуры №
                23/1-5-2020 от 09.09.2020 ЭЦП
              </a>
            </li>
          </ul>
        </DropDown>
        <DropDown
          className={`${toggleClassName(
            "btn-show",
            "btn-show-white",
            "btn-show-black",
            "btn-show-contrast"
          )}`}
          classNameActive={`${toggleClassName(
            "btn-show-active",
            "btn-show-white-active",
            "btn-show-black-active",
            "btn-show-contrast-active"
          )}`}
          title={"Заключения санэпиднадзора и противопожарной службы"}
        >
          <ul>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Pismo_pozh} target={"_blank"} rel="noreferrer">
                Письмо МЧС России № 533-2-4-28 от 17.05.2019
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Zakl_pozh2} target={"_blank"} rel="noreferrer">
                Заключение №296/02 о соответствии объекта защиты обязательным
                требованиям пожарной безопасности
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={Zakl_pozh3} target={"_blank"} rel="noreferrer">
                Заключение №96/02 о соответствии объекта защиты обязательным
                требованиям пожарной безопасности (стадион "Нефтяник")
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={ZaklSanitar1} target={"_blank"} rel="noreferrer">
                Санитарно-эпидемиологическое заключение на здания, строения,
                сооружения, помещения, оборудование и иное имущество,
                используемое для осуществления образовательной деятельности по
                программам среднего профессионального образования (с
                приложением) по адресу г. Уфа, ул. Ахметова, д. 275
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={ZaklSanitar2} target={"_blank"} rel="noreferrer">
                Санитарно-эпидемиологическое заключение на здания, строения,
                сооружения, помещения, оборудование и иное имущество,
                используемое для осуществления образовательной деятельности по
                программам дополнительного образования и профессионального
                обучения
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={ZaklSanitar3} target={"_blank"} rel="noreferrer">
                Санитарно-эпидемиологическое заключение на здания, строения,
                сооружения, помещения, оборудование и иное имущество,
                используемое для осуществления образовательной деятельности по
                программам среднего профессионального образования по адресу: г.
                Уфа, ул. Комарова, д.9
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={SEZ_predreisovaya} target={"_blank"} rel="noreferrer">
                Санитарно-эпидемиологическое заключение на здания, строения,
                сооружения и (или) помещения для осуществления медицинской
                деятельности по адресу г. Уфа, ул. Ахметова, д. 275
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a
                href={vipiska_iz_reestra11042023}
                target={"_blank"}
                rel="noreferrer"
              >
                Выписка из реестра лицензий по состоянию на 15:02 11.04.2023 г.
              </a>
            </li>
            <li className="doc__item">
              <PDF height={"40px"} width={"40px"} />
              <a href={ZaklSanitar5} target={"_blank"} rel="noreferrer">
                Санитарно-эпидемиологическое заключение на здания, строения,
                сооружения, помещения, оборудование и иное имущество,
                используемое для осуществления образовательной деятельности по
                программам среднего профессионального образования (с
                приложением) по адресу г. Уфа, ул. Союзная
              </a>
            </li>
          </ul>
        </DropDown>
      </div>
    </>
  );
};
MainDocs.propTypes = {
  isActive: PropTypes.bool,
};
export default MainDocs;
