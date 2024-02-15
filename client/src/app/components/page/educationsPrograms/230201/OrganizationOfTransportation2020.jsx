import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import rodn_yaz_op from "../../../../assets/pdf/educationPage/230201/workPrograms/rodn_yaz_op.pdf";
import rodn_literatura_op from "../../../../assets/pdf/educationPage/230201/workPrograms/rodn_literatura_op.pdf";
import fiz_kultura_op from "../../../../assets/pdf/educationPage/230201/workPrograms/fiz_kultura_op.pdf";
import obgh_op from "../../../../assets/pdf/educationPage/230201/workPrograms/obgh_op.pdf";
import astronomiya_op from "../../../../assets/pdf/educationPage/230201/workPrograms/astronomiya_op.pdf";
import chimiya_op from "../../../../assets/pdf/educationPage/230201/workPrograms/chimiya_op.pdf";
import obchestvoznanie_op from "../../../../assets/pdf/educationPage/230201/workPrograms/obchestvoznanie_op.pdf";
import biologiya_op from "../../../../assets/pdf/educationPage/230201/workPrograms/biologiya_op.pdf";
import geografiya_op from "../../../../assets/pdf/educationPage/230201/workPrograms/geografiya_op.pdf";
import matematika_op from "../../../../assets/pdf/educationPage/230201/workPrograms/geografiya_op.pdf";
import informatika_op from "../../../../assets/pdf/educationPage/230201/workPrograms/informatika_op.pdf";
import fizika_op from "../../../../assets/pdf/educationPage/230201/workPrograms/fizika_op.pdf";
import osnov_filosof_op from "../../../../assets/pdf/educationPage/230201/workPrograms/osnov_filosof_op.pdf";
import istoriya2_op from "../../../../assets/pdf/educationPage/230201/workPrograms/istoriya2_op.pdf";
import inostr2_op from "../../../../assets/pdf/educationPage/230201/workPrograms/inostr2_op.pdf";
import fiz_kultura2_op from "../../../../assets/pdf/educationPage/230201/workPrograms/fiz_kultura2_op.pdf";
import matematika2_op from "../../../../assets/pdf/educationPage/230201/workPrograms/matematika2_op.pdf";
import informatika2_op from "../../../../assets/pdf/educationPage/230201/workPrograms/informatika2_op.pdf";
import ingener_grafika_op from "../../../../assets/pdf/educationPage/230201/workPrograms/ingener_grafika_op.pdf";
import elektrotechnika_elektronika_op from "../../../../assets/pdf/educationPage/230201/workPrograms/elektrotechnika_elektronika_op.pdf";
import metrolog_standart_sert_op from "../../../../assets/pdf/educationPage/230201/workPrograms/metrolog_standart_sert_op.pdf";
import transp_syst_Rossii_op from "../../../../assets/pdf/educationPage/230201/workPrograms/transp_syst_Rossii_op.pdf";
import techn_sredstva_op from "../../../../assets/pdf/educationPage/230201/workPrograms/techn_sredstva_op.pdf";
import popd_op from "../../../../assets/pdf/educationPage/230201/workPrograms/popd_op.pdf";
import ochrana_truda_op from "../../../../assets/pdf/educationPage/230201/workPrograms/ochrana_truda_op.pdf";
import bezop_ghizned_op from "../../../../assets/pdf/educationPage/230201/workPrograms/bezop_ghizned_op.pdf";
import PM01_org_perev_process_op from "../../../../assets/pdf/educationPage/230201/workPrograms/PM01_org_perev_process_op.pdf";
import PM02_org_serv_obsl_op from "../../../../assets/pdf/educationPage/230201/workPrograms/PM02_org_serv_obsl_op.pdf";
import PM03_org_trasp_logist_op from "../../../../assets/pdf/educationPage/230201/workPrograms/PM03_org_trasp_logist_op.pdf";
import PM04_vipoln_rabot_op from "../../../../assets/pdf/educationPage/230201/workPrograms/PM04_vipoln_rabot_op.pdf";
import russ_yaz_kul_rehi_op from "../../../../assets/pdf/educationPage/230201/workPrograms/russ_yaz_kul_rehi_op.pdf";
import delov_inostr_op from "../../../../assets/pdf/educationPage/230201/workPrograms/delov_inostr_op.pdf";
import osnov_delopr_op from "../../../../assets/pdf/educationPage/230201/workPrograms/osnov_delopr_op.pdf";
import vnutr_vodn_puti_Rossii_op from "../../../../assets/pdf/educationPage/230201/workPrograms/vnutr_vodn_puti_Rossii_op.pdf";
import org_dostup_sred_invalid_op from "../../../../assets/pdf/educationPage/230201/workPrograms/org_dostup_sred_invalid_op.pdf";
import inform_techn_prof_deyat_op from "../../../../assets/pdf/educationPage/230201/workPrograms/inform_techn_prof_deyat_op.pdf";
import kommerh_rabota_op from "../../../../assets/pdf/educationPage/230201/workPrograms/kommerh_rabota_op.pdf";
import strach_riski_op from "../../../../assets/pdf/educationPage/230201/workPrograms/strach_riski_op.pdf";
import ekonomika_upravl_op from "../../../../assets/pdf/educationPage/230201/workPrograms/ekonomika_upravl_op.pdf";
import bortprovodnik_op from "../../../../assets/pdf/educationPage/230201/workPrograms/bortprovodnik_op.pdf";

const OrganizationOfTransportation2020 = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Основная профессиональная образовательная программа среднего
        профессионального образования для специальности 23.02.01 "Организация
        перевозок и управление на транспорте" (по видам), очная
      </h1>
      <h2>Рабочие программы</h2>
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
              <a
                itemProp="educationRpd"
                href={rodn_yaz_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Родной язык
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={rodn_literatura_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Родная литература
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={"biolog2"}
                target={"_blank"}
                rel="noreferrer"
              >
                Иностранный язык
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={"chimiya1"}
                target={"_blank"}
                rel="noreferrer"
              >
                История
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={fiz_kultura_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Физическая культура
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={obgh_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Основы безопасности жизнедеятельности
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={astronomiya_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Астрономия
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={chimiya_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Химия
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={obchestvoznanie_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Обществознание
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={biologiya_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Биология
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={geografiya_op}
                target={"_blank"}
                rel="noreferrer"
              >
                География
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={matematika_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Математика
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={informatika_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Информатика
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={fizika_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Физика
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={osnov_filosof_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Основы философии
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={istoriya2_op}
                target={"_blank"}
                rel="noreferrer"
              >
                История
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={inostr2_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Иностранный язык
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={fiz_kultura2_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Физическая культура
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={matematika2_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Математика
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={informatika2_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Информатика
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>21</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={ingener_grafika_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Инженерная графика
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>22</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={elektrotechnika_elektronika_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Электротехника и электроника
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>23</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={metrolog_standart_sert_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Метрология, стандартизация и сертификация
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>24</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={transp_syst_Rossii_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Транспортная система России
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>25</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={techn_sredstva_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Технические средства (по видам транспорта)
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>26</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={popd_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Правовое обеспечение профессиональной деятельности
              </a>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>27</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={ochrana_truda_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Охрана труда
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>28</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={bezop_ghizned_op}
                target={"_blank"}
                rel="noreferrer"
              >
                Безопасность жизнедеятельности
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>29</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={PM01_org_perev_process_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ.01 Организация перевозочного процесса (по видам транспорта)
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>30</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={PM02_org_serv_obsl_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ.02 Организация сервисного обслуживания на транспорте (по
                видам транспорта)
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>31</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={PM03_org_trasp_logist_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ.03 Организация транспортно-логистической деятельности (по
                видам транспорта)
              </a>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>32</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={PM04_vipoln_rabot_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ.04 Выполнение работ по одной или нескольким профессиям
                рабочих, должностям служащих
              </a>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>33</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={russ_yaz_kul_rehi_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.01 Русский язык и культура речи
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>34</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={delov_inostr_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.02 Деловой иностранный язык
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>35</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={osnov_delopr_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.03 Основы делопроизводства
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>36</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={vnutr_vodn_puti_Rossii_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.04 Внутренние водные пути России
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>37</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={org_dostup_sred_invalid_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.05 Организация доступной среды для инвалидов на транспорте
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>38</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={inform_techn_prof_deyat_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.06 Информационные технологии в профессиональной деятельности
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>39</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={kommerh_rabota_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.07 Коммерческая работа на транспорте
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>40</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={strach_riski_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.08 Страхование и риски
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>41</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={ekonomika_upravl_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.09 Экономика и управление на водном транспорте
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>42</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="educationRpd"
                href={bortprovodnik_op}
                target={"_blank"}
                rel="noreferrer"
              >
                ВЧ.10 Бортпроводник
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default OrganizationOfTransportation2020;
