import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import astronom1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/astronom1.pdf";
import BGHD1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/BGHD1.pdf";
import chimiya1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/chimiya1.pdf";
import elektronika1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/elektronika1.pdf";
import EOP1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/EOP1.pdf";
import expl_SEU1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/expl_SEU1.pdf";
import filosof1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/filosof1.pdf";
import fiz_kult1_1kurs from "../../../../assets/pdf/educationPage/260203/workPrograms2020/fiz_kult1_1kurs.pdf";
import fizika1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/fizika1.pdf";
import inform1_1kurs from "../../../../assets/pdf/educationPage/260203/workPrograms2020/inform1_1kurs.pdf";
import inform1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/inform1.pdf";
import ingh_grafika1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/ingh_grafika1.pdf";
import inostr1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/inostr1.pdf";
import istor1_1kurs from "../../../../assets/pdf/educationPage/260203/workPrograms2020/istor1_1kurs.pdf";
import istor1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/istor1.pdf";
import literatura1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/literatura1.pdf";
import matem1_1kurs from "../../../../assets/pdf/educationPage/260203/workPrograms2020/matem1_1kurs.pdf";
import matem1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/matem1.pdf";
import mechanika1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/mechanika1.pdf";
import metrolog1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/metrolog1.pdf";
import OBGH1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/OBGH1.pdf";
import PM01_uprabl_expl1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/PM01_uprabl_expl1.pdf";
import PM02_obesp_bezop_plav1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/PM02_obesp_bezop_plav1.pdf";
import PM03_otrab_razm_gruza1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/PM03_otrab_razm_gruza1.pdf";
import PM04_analiz_effekt_sudna1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/PM04_analiz_effekt_sudna1.pdf";
import PM05_proffes1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/PM05_proffes1.pdf";
import POPD1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/POPD1.pdf";
import prog_vospit1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/prog_vospit1.pdf";
import psocholog1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/psocholog1.pdf";
import russ_yaz1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/russ_yaz1.pdf";
import TUS1 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/TUS1.pdf";
import biolog2 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/biolog2.pdf";
import geograf2 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/geograf2.pdf";
import obshest2 from "../../../../assets/pdf/educationPage/260203/workPrograms2020/obshest2.pdf";

const Navigation2019 = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Основная профессиональная образовательная программа среднего
        профессионального образования для специальности 26.02.03 "Судовождение"
        (углубленная подготовка) (год набора 2019)
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
                href={astronom1}
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
                href={BGHD1}
                target={"_blank"}
                rel="noreferrer"
              >
                Безопасность жизнидеятельности
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
                href={biolog2}
                target={"_blank"}
                rel="noreferrer"
              >
                Биология
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
                href={chimiya1}
                target={"_blank"}
                rel="noreferrer"
              >
                Химия
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
                href={elektronika1}
                target={"_blank"}
                rel="noreferrer"
              >
                Электроника и электротехника
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
                href={EOP1}
                target={"_blank"}
                rel="noreferrer"
              >
                Экологические основы природопользования
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
                href={expl_SEU1}
                target={"_blank"}
                rel="noreferrer"
              >
                Эксплуатация судовых энергетических установок на вспомогательном
                уровне
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
                href={filosof1}
                target={"_blank"}
                rel="noreferrer"
              >
                Основы философии
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
                href={fiz_kult1_1kurs}
                target={"_blank"}
                rel="noreferrer"
              >
                Физическая культура, 1 курс
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
                href={fizika1}
                target={"_blank"}
                rel="noreferrer"
              >
                Физика
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
                href={geograf2}
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
                href={inform1_1kurs}
                target={"_blank"}
                rel="noreferrer"
              >
                Информатика, 1 курс
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
                href={inform1}
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
                href={ingh_grafika1}
                target={"_blank"}
                rel="noreferrer"
              >
                Инженерная графика
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
                href={inostr1}
                target={"_blank"}
                rel="noreferrer"
              >
                Иностранный язык, 1 курс
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
                href={inostr1}
                target={"_blank"}
                rel="noreferrer"
              >
                Иностранный язык
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
                href={istor1_1kurs}
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                История, 1 курс
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
                href={istor1}
                target={"_blank"}
                rel="noreferrer"
              >
                История
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
                href={literatura1}
                target={"_blank"}
                rel="noreferrer"
              >
                Литература
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
                href={matem1_1kurs}
                target={"_blank"}
                rel="noreferrer"
              >
                Математика, 1 курс
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
                href={matem1}
                target={"_blank"}
                rel="noreferrer"
              >
                Математика
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
                href={mechanika1}
                target={"_blank"}
                rel="noreferrer"
              >
                Механика
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
                href={metrolog1}
                target={"_blank"}
                rel="noreferrer"
              >
                Метрология и стандартизация
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
                href={OBGH1}
                target={"_blank"}
                rel="noreferrer"
              >
                Основы безопасности жизнедеятельности
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
                href={obshest2}
                target={"_blank"}
                rel="noreferrer"
              >
                Обществознание
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
                href={PM01_uprabl_expl1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ01. Управление и эксплуатация судна с правом эксплуатации
                судовых энергетических установок
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
                href={PM02_obesp_bezop_plav1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ02. Обеспечение безопасности плавания
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
                href={PM03_otrab_razm_gruza1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ03. Обработка и размещение груза
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
                href={PM04_analiz_effekt_sudna1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ04. Анализ эффективности работы судна
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
                href={PM05_proffes1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ05. Выполнение работ по одной или нескольким профессиям
                рабочих, должностям служащих
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
                href={POPD1}
                target={"_blank"}
                rel="noreferrer"
              >
                Правовые основы профессиональной деятельности
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
                href={psocholog1}
                target={"_blank"}
                rel="noreferrer"
              >
                Психология общения
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
                href={russ_yaz1}
                target={"_blank"}
                rel="noreferrer"
              >
                Русский язык
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
                href={TUS1}
                target={"_blank"}
                rel="noreferrer"
              >
                Теория и устройство судна
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
                href={prog_vospit1}
                target={"_blank"}
                rel="noreferrer"
              >
                Рабочая программа воспитания обучающихся
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default Navigation2019;
