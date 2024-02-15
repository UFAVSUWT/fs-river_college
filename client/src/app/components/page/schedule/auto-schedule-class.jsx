import { Select } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const AutoScheduleClass = ({
  groups8,
  groups9,
  day,
  week,
  setClassLessonsOnDay,
  selectedClass,
  setSelectedClass,
}) => {
  const [class8, setClass8] = useState([]);
  const [class9, setClass9] = useState([]);
  const [lessonsOfSelectedClass8, setLessonsOfSelectedClass8] = useState([]);
  const [lessonsOfSelectedClass9, setLessonsOfSelectedClass9] = useState([]);
  const [classTranformd, setClassTranformd] = useState([]);

  const onChangeTeachers = (value) => {
    setSelectedClass(value);
  };
  useEffect(() => {
    //получаем список всех преподавателей для селектора
    const classOf8Week = [];
    groups8.forEach((element) => {
      element.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e.auditories.forEach((e) => {
            if (!classOf8Week.includes(e.auditory_name)) {
              classOf8Week.push(e.auditory_name);
            }
          })
        )
      );
    });
    setClass8(classOf8Week);
    const classOf9Week = [];
    groups9.forEach((element) => {
      element.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e.auditories.forEach((e) => {
            if (!classOf9Week.includes(e.auditory_name)) {
              classOf9Week.push(e.auditory_name);
            }
          })
        )
      );
    });
    setClass9(classOf9Week);
  }, []);

  //список преподавателей на две недели объединенный и сортированный по алфавиту
  const classOnTwoWeek = _.union(class8, class9).sort();

  classOnTwoWeek.forEach((e) => classTranformd.push({ value: e, label: e }));

  useEffect(() => {
    //получаем список всех занятий для выбранного преподавателя
    // если уже выбирали преподавателя, обнуляем массив
    if (lessonsOfSelectedClass8.length !== 0) {
      lessonsOfSelectedClass8.splice(0, lessonsOfSelectedClass8.length);
    }
    if (lessonsOfSelectedClass9.length !== 0) {
      lessonsOfSelectedClass9.splice(0, lessonsOfSelectedClass9.length);
    }
    const lesOn8week = [];
    groups8.forEach((e) =>
      e.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e?.auditories?.[0]?.auditory_name === selectedClass &&
          e?.auditories?.[0]?.length !== 0
            ? lesOn8week.push(e)
            : null
        )
      )
    );

    setLessonsOfSelectedClass8(lesOn8week);
    const lesOn9week = [];
    groups9.forEach((e) =>
      e.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e?.auditories?.[0]?.auditory_name === selectedClass &&
          e?.auditories?.[0]?.length !== 0
            ? lesOn9week.push(e)
            : null
        )
      )
    );
    setLessonsOfSelectedClass9(lesOn9week);
  }, [selectedClass]);

  useEffect(() => {
    if (lessonsOfSelectedClass8 && lessonsOfSelectedClass9 && day && week) {
      /* Меняем номер недели!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
      if (week === 6) {
        setClassLessonsOnDay(
          lessonsOfSelectedClass8.filter((e) => e.date === day)
        );
      } else if (week === 7) {
        setClassLessonsOnDay(
          lessonsOfSelectedClass9.filter((e) => e.date === day)
        );
      }
    }
  }, [
    day,
    week,
    selectedClass,
    lessonsOfSelectedClass8,
    lessonsOfSelectedClass9,
  ]);

  return (
    <div className="auto-schedule__container-teacher-container">
      <Select
        value={selectedClass}
        className="select"
        placeholder="Выберите аудиторию"
        onChange={onChangeTeachers}
        options={classTranformd}
        key={classTranformd.map((option) => option.value).join(",")}
      />
    </div>
  );
};
AutoScheduleClass.propTypes = {};
export default AutoScheduleClass;
