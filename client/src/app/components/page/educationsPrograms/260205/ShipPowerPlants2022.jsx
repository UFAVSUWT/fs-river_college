import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import astronomia from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Астрономия.pdf";
import bj_sv_rup from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Безопасность жизнедеятельности.pdf";
import gidravlika from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Инженерная графика.pdf";
import injenern_graf from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Иностр.яз в профессиональной деятельности.pdf";
import inostr_v_prof from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Иностранный язык 1 курс.pdf";
import in_1 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Информатика   1 курс.pdf";
import inform1 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Информатика   2 курс.pdf";
import inform2 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП История 1 курс.pdf";
import istor1 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП История 2 курс.pdf";
import istor2 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Литература.pdf";
import literatura from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Математика    1 курс.pdf";
import matem1 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Математика 2 курс.pdf";
import matem2 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Материаловедение.pdf";
import material from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Метрология и стандартизация.pdf";
import metrol from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Механика.pdf";
import obj from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП ОБЖ.pdf";
import osnov_filos1 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Основы философии.pdf";
import osnov_fin from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Основы финансовой грамотности.pdf";
import ohr_truda from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП ПМ 02.pdf";
import pm1 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП ПМ 03.pdf";
import pm2 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП ПМ 04.pdf";
import pm3 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Психология общения.pdf";
import pm4 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Родной язык.pdf";
import pm02 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Русский язык.pdf";
import psiholog from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Теория устройства судна.pdf";
import rodnoy from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Техническая термодинамика и теплопередача.pdf";
import russkiy from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Физика.pdf";
import tus from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Физкультура   1 курс.pdf";
import teh_meh from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Физкультура 2-4 курс.pdf";
import teh_termodin from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Химия.pdf";
import fizika from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Экологические основы природопользования.pdf";
import fizra1 from "../../../../assets/pdf/educationPage/260205/СМ 2022 гп/4. Рабочие программы/РП Электроника и электротехника.pdf";

const ShipPowerPlants2022 = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Основная профессиональная образовательная программа среднего
        профессионального образования для специальности 26.02.05 "Эксплуатация
        судовых энергетических установок" (год набора 2022)
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
                href={astronomia}
                target={"_blank"}
                rel="noreferrer"
              >
                Астрономия
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
                href={bj_sv_rup}
                target={"_blank"}
                rel="noreferrer"
              >
                Безопасность жизнедеятельности
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
                href={gidravlika}
                target={"_blank"}
                rel="noreferrer"
              >
                Инженерная графика
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
                href={injenern_graf}
                target={"_blank"}
                rel="noreferrer"
              >
                Иностр. яз в профессиональной деятельности
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
                href={inostr_v_prof}
                target={"_blank"}
                rel="noreferrer"
              >
                Иностранный язык 1 курс
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
                href={in_1}
                target={"_blank"}
                rel="noreferrer"
              >
                Информатика 1 курс
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
                href={inform1}
                target={"_blank"}
                rel="noreferrer"
              >
                Информатика 2 курс
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
                href={inform2}
                target={"_blank"}
                rel="noreferrer"
              >
                История 1 курс
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
                href={istor1}
                target={"_blank"}
                rel="noreferrer"
              >
                История 2 курс
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
                href={istor2}
                target={"_blank"}
                rel="noreferrer"
              >
                Литература
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
                href={literatura}
                target={"_blank"}
                rel="noreferrer"
              >
                Математика 1 курс
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
                href={matem1}
                target={"_blank"}
                rel="noreferrer"
              >
                Математика 2 курс
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
                href={matem2}
                target={"_blank"}
                rel="noreferrer"
              >
                Материаловедение
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
                href={material}
                target={"_blank"}
                rel="noreferrer"
              >
                Метрология и стандартизация
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
                href={metrol}
                target={"_blank"}
                rel="noreferrer"
              >
                Механика
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
                href={obj}
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                ОБЖ
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
                href={osnov_filos1}
                target={"_blank"}
                rel="noreferrer"
              >
                Основы философии
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
                href={osnov_fin}
                target={"_blank"}
                rel="noreferrer"
              >
                Основы финансовой грамотности
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
                href={ohr_truda}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ 02
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
                href={pm1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ 03
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
                href={pm2}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ 04
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
                href={pm3}
                target={"_blank"}
                rel="noreferrer"
              >
                Психология общения
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
                href={pm4}
                target={"_blank"}
                rel="noreferrer"
              >
                Родной язык
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
                href={pm02}
                target={"_blank"}
                rel="noreferrer"
              >
                Русский язык
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
                href={psiholog}
                target={"_blank"}
                rel="noreferrer"
              >
                Теория устройства судна
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
                href={rodnoy}
                target={"_blank"}
                rel="noreferrer"
              >
                Техническая термодинамика и теплопередача
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
                href={russkiy}
                target={"_blank"}
                rel="noreferrer"
              >
                Физика
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
                href={tus}
                target={"_blank"}
                rel="noreferrer"
              >
                Физкультура 1 курс
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
                href={teh_meh}
                target={"_blank"}
                rel="noreferrer"
              >
                Физкультура 2-4 курс
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
                href={teh_termodin}
                target={"_blank"}
                rel="noreferrer"
              >
                Химия
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
                href={fizika}
                target={"_blank"}
                rel="noreferrer"
              >
                Экологические основы природопользования
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
                href={fizra1}
                target={"_blank"}
                rel="noreferrer"
              >
                Электроника и электротехника
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default ShipPowerPlants2022;
