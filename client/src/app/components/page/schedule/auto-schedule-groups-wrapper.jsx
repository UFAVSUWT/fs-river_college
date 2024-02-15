import React from "react";
const AutoScheduleWrapper = ({
  selectedDaylessons,
  day,
  week,
  getBookmark,
}) => {
  return (
    <div className="auto-schedule__container-lessons-container">
      {selectedDaylessons && selectedDaylessons[0].lessons !== undefined ? (
        <div className="group-info">
          {getBookmark()}
          <div className="second-container">
            <div className="group-info-date">{day}</div>
            <div className="group-info-week">{week} неделя</div>
          </div>
        </div>
      ) : null}
      {selectedDaylessons && selectedDaylessons[0].lessons === undefined ? (
        <div className="absent">Расписание отсутствует!</div>
      ) : selectedDaylessons && selectedDaylessons[0].lessons !== undefined ? (
        selectedDaylessons[0].lessons.map((e, index) => (
          <div className="lessons-container" key={`lessons` + index}>
            <div className="lessons-container-number">
              <div>{index + 1}</div>
            </div>
            <div className="lessons-container-time">
              <div>{e.time_start}</div>
              <div>{e.time_end}</div>
            </div>{" "}
            <div className="lessons-container-lessons-common">
              <div className="lessons-container-lessons-common-lesson">
                {e.subject}
              </div>
              <div className="lessons-container-lessons-common-teacher">
                {e.teachers.map((e, index) => (
                  <div key={`${index} + ${e.teacher_name}`}>
                    {e.teacher_name}
                  </div>
                ))}
              </div>
            </div>
            <div className="lessons-container-auditory">
              {e.auditories.map((e, index) => (
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
export default AutoScheduleWrapper;
