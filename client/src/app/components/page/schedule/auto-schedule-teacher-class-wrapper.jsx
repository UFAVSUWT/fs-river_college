import React from "react";
const AutoScheduleTeacherClassWrapper = ({
  data,
  getBookmark,
  day,
  week,
  teachersComponent,
}) => {
  // сортируем массив по времени начала занятия
  data?.sort((a, b) => +a.time_start.slice(0, 2) - +b.time_start.slice(0, 2));

  return (
    <div className="auto-schedule__container-lessons-container">
      {data && data !== undefined ? (
        <div className="group-info">
          {getBookmark()}
          <div className="second-container">
            <div className="group-info-date">{day}</div>
            <div className="group-info-week">{week} неделя</div>
          </div>
        </div>
      ) : null}
      {(data && data === undefined) || (data && data.length === 0) ? (
        <div className="absent">Расписание отсутствует!</div>
      ) : data && data !== undefined ? (
        data.map((element, index) => (
          <div className="lessons-container" key={`lessons` + index}>
            <div className="lessons-container-number">
              <div>{index + 1}</div>
            </div>
            <div className="lessons-container-time">
              <div>{element.time_start}</div>
              <div>{element.time_end}</div>
            </div>{" "}
            <div className="lessons-container-lessons-common">
              <div className="lessons-container-lessons-common-lesson">
                {element.subject}
              </div>
              <div className="lessons-container-lessons-common-teacher">
                {element.teachers.map((e, index) => (
                  <div key={`${index} + ${e.teacher_name}`}>
                    {teachersComponent ? element.currentGroup : e.teacher_name}
                  </div>
                ))}
              </div>
            </div>
            <div className="lessons-container-auditory">
              {element.auditories.map((e, index) => (
                <div key={`${index} + ${e.auditory_name}`}>
                  {e.auditory_name}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : null}
    </div>
  );
};
export default AutoScheduleTeacherClassWrapper;
