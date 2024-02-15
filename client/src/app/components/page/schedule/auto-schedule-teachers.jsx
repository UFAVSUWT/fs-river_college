import { Select } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";

const AutoScheduleTeachers = ({
  groups8,
  groups9,
  day,
  week,
  setTeachersLessonsOnDay,
  selectedTeacher,
  setSelectedTeacher,
}) => {
  const [teachers8, setTeachers8] = useState([]);
  const [teachers9, setTeachers9] = useState([]);
  const [lessonsOfSelectedTeacher8, setLessonsOfSelectedTeacher8] = useState(
    []
  );
  const [lessonsOfSelectedTeacher9, setLessonsOfSelectedTeacher9] = useState(
    []
  );
  // eslint-disable-next-line no-unused-vars
  const [teachersTranformd, setTeachersTranformd] = useState([]);

  const onChangeTeachers = (value) => {
    setSelectedTeacher(value);
  };
  useEffect(() => {
    //получаем список всех преподавателей для селектора
    const teachersOf8Week = [];
    groups8.forEach((element) => {
      element.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e.teachers.forEach((e) => {
            if (!teachersOf8Week.includes(e.teacher_name)) {
              teachersOf8Week.push(e.teacher_name);
            }
          })
        )
      );
    });
    setTeachers8(teachersOf8Week);
    const teachersOf9Week = [];
    groups9.forEach((element) => {
      element.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e.teachers.forEach((e) => {
            if (!teachersOf9Week.includes(e.teacher_name)) {
              teachersOf9Week.push(e.teacher_name);
            }
          })
        )
      );
    });
    setTeachers9(teachersOf9Week);
  }, []);

  //список преподавателей на две недели объединенный и сортированный по алфавиту
  const teachersOnTwoWeek = _.union(teachers8, teachers9).sort();

  teachersOnTwoWeek.forEach((e) =>
    teachersTranformd.push({ value: e, label: e })
  );

  useEffect(() => {
    //получаем список всех занятий для выбранного преподавателя
    // если уже выбирали преподавателя, обнуляем массив
    if (lessonsOfSelectedTeacher8.length !== 0) {
      lessonsOfSelectedTeacher8.splice(0, lessonsOfSelectedTeacher8.length);
    }
    if (lessonsOfSelectedTeacher9.length !== 0) {
      lessonsOfSelectedTeacher9.splice(0, lessonsOfSelectedTeacher9.length);
    }
    const lesOn8week = [];
    groups8.forEach((e) => {
      const currentGroup = e.group_name;
      e.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e?.teachers?.[0]?.teacher_name === selectedTeacher &&
          e?.teachers?.[0]?.length !== 0
            ? lesOn8week.push({ ...e, currentGroup: currentGroup })
            : null
        )
      );
    });

    setLessonsOfSelectedTeacher8(lesOn8week);
    const lesOn9week = [];
    groups9.forEach((e) => {
      const currentGroup = e.group_name;
      e.days.forEach((e) =>
        e.lessons?.forEach((e) =>
          e?.teachers?.[0]?.teacher_name === selectedTeacher &&
          e?.teachers?.[0]?.length !== 0
            ? lesOn9week.push({ ...e, currentGroup: currentGroup })
            : null
        )
      );
    });
    setLessonsOfSelectedTeacher9(lesOn9week);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTeacher]);
  useEffect(() => {
    if (lessonsOfSelectedTeacher8 && lessonsOfSelectedTeacher9 && day && week) {
      /* меняем номер недели!!!!!!!!!!!!!!!!!!!!! */
      if (week === 6) {
        setTeachersLessonsOnDay(
          lessonsOfSelectedTeacher8.filter((e) => e.date === day)
        );
      } else if (week === 7) {
        setTeachersLessonsOnDay(
          lessonsOfSelectedTeacher9.filter((e) => e.date === day)
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    day,
    week,
    selectedTeacher,
    lessonsOfSelectedTeacher9,
    lessonsOfSelectedTeacher8,
  ]);
  return (
    <div className="auto-schedule__container-teacher-container">
      <Select
        value={selectedTeacher}
        className="select"
        placeholder="Выберите преподавателя"
        onChange={onChangeTeachers}
        options={teachersTranformd}
        key={teachersTranformd.map((option) => option.value).join(",")}
      />
    </div>
  );
};
AutoScheduleTeachers.propTypes = {};
export default AutoScheduleTeachers;
