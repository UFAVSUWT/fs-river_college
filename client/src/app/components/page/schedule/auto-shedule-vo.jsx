import React from "react";
import raspisanie from "../../../assets/doc/schedule/vo/3 неделя ВО.odt";
import { Button } from "antd";
const AutoScheduleVo = () => {
  return (
    <div className="autoScheduleVo-wrapper">
      <div>
        <a href={raspisanie}>
          <Button size="large">Скачать расписание на 3 неделю</Button>
        </a>
      </div>
    </div>
  );
};
export default AutoScheduleVo;
