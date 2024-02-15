import React, { useState } from "react";
import HrLine from "../../../common/hrLine/HrLine";

import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
import LocalActs from "./local-acts";
import MainDocs from "./main-docs";

const Document = observer(() => {
  const [isActive, setIsActive] = useState(true);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      itemProp="copy"
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <div className="doc_navpanel">
        <span
          onClick={() => toggleClass()}
          className={`${isActive ? "is-active" : ""}`}
        >
          Основные документы
        </span>
        <span
          onClick={() => toggleClass()}
          className={`${!isActive ? "is-active" : ""}`}
        >
          Локальные нормативные акты
        </span>
      </div>
      <HrLine className="document__hrLine" />
      <div className="doc_container">
        <MainDocs isActive={isActive} />
        <LocalActs isActive={isActive} />
      </div>
    </div>
  );
});
export default Document;
