import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { toggleClassName, toggleIconColor } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";

const BreadCrumbs = observer(() => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    return (
      <div
        className={toggleClassName(
          "breadCrumbs__container",
          "breadCrumbs__container-white",
          "breadCrumbs__container-black",
          "breadCrumbs__container-contrast"
        )}
      >
        <NavLink to={"/"}>
          <Home stroke={toggleIconColor("#0c1c2a")} />
        </NavLink>
        <NavLink to={"/"}>Главная </NavLink>
        {pathnames.map((name, index) => {
          let route = `/${pathnames.slice(0, index + 1).join("/")}`;
          let linkName = name;
          switch (linkName) {
            case "sveden":
              linkName = null;
              break;
            case "common":
              linkName = "/ Основные сведения ";
              break;
            case "struct":
              linkName = "/ Структура и органы управления ";
              break;
            case "document":
              linkName = "/ Документы ";
              break;
            case "education":
              linkName = "/ Образование ";
              break;
            case "eduStandarts":
              linkName = "/ Образовательные стандарты и требования ";
              break;
            case "employees":
              linkName = "/ Руководство ";
              break;
            case "objects":
              linkName = "/ Материально-техническое обеспечение ";
              break;
            case "grants":
              linkName = "/ Меры поддержки обучающихся ";
              break;
            case "paid__edu":
              linkName = "/ Платные образовательные услуги ";
              break;
            case "budget":
              linkName = "/ Финансово-хозяйственная деятельность ";
              break;
            case "vacant":
              linkName = "/ Вакантные места для приема (перевода) ";
              break;
            case "ovz":
              linkName = "/ Доступная среда ";
              break;
            case "inter":
              linkName = " / Международное сотрудничество ";
              break;
            case "live":
              linkName = null;
              break;
            case "studentsLive":
              linkName = "/ Студенческая жизнь ";
              break;
            case "interview":
              linkName = "/ Интервью с выпускниками ";
              break;
            case "rest":
              linkName = "/ Отдых ";
              break;
            case "sport":
              linkName = "/ Спорт ";

              break;
            case "photoGallery":
              linkName = "/ Фотогаллерея ";
              break;
            case "teachers":
              linkName = "/ Преподаватели ";
              break;
            case "ourPride":
              linkName = "/ Наша гордость ";
              break;
            case "science":
              linkName = "/ Наука ";

              break;
            case "vacancies":
              linkName = "/ Вакансии ";
              break;
            case "home":
              linkName = null;
              break;
            case "aboutBranch":
              linkName = "/ О филиале ";
              break;
            case "stateForPeople":
              linkName = "/ Государство для людей ";
              break;
            case "historicalReference":
              linkName = "/ Историческая справка ";
              break;
            case "univercityNews":
              linkName = "/ Новости ";
              break;
            case "univercityEvents":
              linkName = "/ План мероприятий ";
              break;
            case "learning":
              linkName = null;
              break;
            case "cadets":
              linkName = "/ Курсантам ";
              break;
            case "educationsPlatforms":
              linkName =
                "/ Сторонние электронные образовательные и информационные ресурсы: ";
              break;
            case "correspondenceStudents":
              linkName = "/ Заочникам ";
              break;
            case "parents":
              linkName = "/ Родителям ";
              break;
            case "practice":
              linkName = "/ Отдел практической подготовки ";
              break;
            case "reviews":
              linkName = "/ Курсанты и выпускники филиала о практике ";
              break;
            case "shedule":
              linkName = "/ График практикие ";
              break;
            case "utc":
              linkName = "/ Учебно-тренажерный центр ";
              break;
            case "employmentService":
              linkName = "/ О службе трудоустройства выпускников ";
              break;
            case "faq":
              linkName = "/ Вопросы и ответы ";
              break;
            case "partners":
              linkName = "/ Социальные партнеры филиала ";
              break;
            case "news":
              linkName = "/ Новости трудоустройства 2023 года ";
              break;
            case "jobFair":
              linkName = "/ Ярмарки вакансий ";
              break;
            case "vacanciesFrom":
              linkName = "/ Вакансии от работодателей ";
              break;
            case "feedback":
              linkName = "/ Обратная связь ";
              break;
            case "links":
              linkName = "/ Полезные ссылки ";
              break;
            case "enrollee":
              linkName = null;
              break;
            case "kcp":
              linkName = "/ КЦП СПО на 2023/2024 учeбный год ";
              break;
            case "kcpVo":
              linkName = "/ КЦП ВО на 2024/2025 учeбный год ";
              break;
            case "educationLvlRequirements":
              linkName = "/ Требования к уровню образования ";
              break;
            case "admissionConditions":
              linkName = "/ Условия приема на обучение ";
              break;
            case "receptionPlaces":
              linkName = "/ Места приема документов ";
              break;
            case "receptionTiming":
              linkName = "/ Информация о сроках проведения приема ";
              break;
            case "educationCosts":
              linkName =
                "/ Стоимость обучения на коммерческой основе на 2023/2024 учебный год ";
              break;
            case "messageFromDirector":
              linkName = "/ Обращение директора ";
              break;
            case "spo":
              linkName = "/ Прием по программам СПО ";
              break;
            case "passingScores":
              linkName = "/ Проходные баллы прошлых лет ";
              break;
            case "higherEducation":
              linkName = "/ Прием по программам ВО ";
              break;
            case "reception":
              linkName = "/ Приемная кампания 2024 ";
              break;
            case "submissionDoc":
              linkName = "/ Подача документов ";
              break;
            case "monitoring":
              linkName = "/ Мониторинг подачи документов ";
              break;
            case "listsOfPersonsWhoAppliedForAdmission":
              linkName = "/ Списки лиц, подавших заявление на поступление ";
              break;
            case "competitionLists":
              linkName = "/ Конкурсные списки ";
              break;
            case "draftOrdersForEnrollment":
              linkName = "/ Проекты приказов на зачисление ";
              break;
            case "enlistedOrders":
              linkName = "/ Приказы зачисленных ";
              break;
            case "applicantsInfo":
              linkName = "/ Как стать нашим курсантом ";
              break;
            case "open-day":
              linkName = "/ Дни открытых дверей ";
              break;
            case "training":
              linkName = null;
              break;
            case "professionalTrainingPrograms":
              linkName = "/ Перечень программ профессионального обучения ";
              break;
            case "addEducationProgramsChildrenAdults":
              linkName = "/ Общеразвивающие программы ";
              break;
            case "aboutCdo":
              linkName =
                "/ Центр конвенционной подготовки и дополнительного образования ";
              break;
            case "advancedTraining":
              linkName = "/ Программы повышения квалификации ";
              break;
            case "distanceLearning":
              linkName = "/ Cистемa дистанционного обучения ";
              break;
            default:
              linkName = null;
              break;
          }
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <div key={index} className="breadCrumbs__container-last">
              {linkName}
            </div>
          ) : (
            <NavLink key={index} to={`${route}`}>
              {linkName}
            </NavLink>
          );
        })}
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
});

export default BreadCrumbs;
