import { Select } from "antd";
import React from "react";
import PropTypes from "prop-types";
const AutoScheduleGroups = ({
  localCourse,
  localGroup,
  handleChangeCourse,
  handleChangeGroup,
  allGroupName,
}) => {
  return (
    <div className="auto-schedule__container-groups-container">
      <Select
        defaultValue={localCourse ? localCourse : null}
        placeholder="Выберите курс"
        className="select"
        onChange={handleChangeCourse}
        options={[
          {
            value: 1,
            label: 1,
          },
          {
            value: 2,
            label: 2,
          },
          {
            value: 3,
            label: 3,
          },
          {
            value: 4,
            label: 4,
          },
          {
            value: 5,
            label: 5,
          },
          {
            value: 6,
            label: 6,
          },
        ]}
      />

      <Select
        defaultValue={localGroup ? localGroup : null}
        placeholder="Выберите группу"
        className="select"
        onChange={handleChangeGroup}
        options={allGroupName}
        key={allGroupName.map((option) => option.value).join("-")}
      />
    </div>
  );
};
AutoScheduleGroups.propTypes = {
  localCourse: PropTypes.number,
  localGroup: PropTypes.string,
  handleChangeCourse: PropTypes.func,
  handleChangeGroup: PropTypes.func,
  allGroupName: PropTypes.array,
};
export default AutoScheduleGroups;
