import React, { useEffect, useState } from "react";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { ReactComponent as Exit } from "../../../assets/svg/exit.svg";
import { ReactComponent as Exit1 } from "../../../assets/svg/exit1.svg";
import PropTypes from "prop-types";
const TableWrapper = observer(({ title, children }) => {
  const [tableSize, setTableSize] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, [tableSize]);
  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      setTableSize(false);
    }
  };

  const toggleTableSize = () => {
    setTableSize(!tableSize);
  };
  return (
    <div style={{ fontSize: toggleFontSize(14) }}>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        {title}
      </h3>
      <div>
        <div
          className={`${
            tableSize ? "fullSizeTable" : "scroll-table struct__scrollTable"
          }`}
        >
          <h3
            style={!tableSize ? { display: "none" } : { display: "block" }}
            className={`common__container-title  ${toggleClassName(
              "title",
              "title-white",
              "title-black",
              "title-contrast"
            )}`}
          >
            {title}
          </h3>
          <div
            onClick={() => toggleTableSize()}
            className="fullSizeTabl-btnwrapper"
          >
            <div>{tableSize ? <Exit1 /> : <Exit />}</div>
            <div>{tableSize ? "Свернуть таблицу" : "Развернуть таблицу"}</div>
          </div>
          {children}
          <div
            onClick={() => toggleTableSize()}
            className="fullSizeTabl-btnwrapper"
          >
            <div>{tableSize ? <Exit1 /> : <Exit />}</div>
            <div>{tableSize ? "Свернуть таблицу" : "Развернуть таблицу"}</div>
          </div>
        </div>
      </div>
    </div>
  );
});
TableWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default TableWrapper;
