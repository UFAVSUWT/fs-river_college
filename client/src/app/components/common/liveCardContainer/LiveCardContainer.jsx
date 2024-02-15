import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../utils/disabled";
import LiveCards from "../liveCards/LiveCards";
const LiveCardContainer = observer(() => {
  return (
    <>
      <div
        className={` _container ${toggleClassName(
          "livecard__container",
          "white",
          "black",
          "contrast"
        )}`}
      >
        <span
          className={toggleClassName(
            "infocontainer__titile",
            "infocontainer__titile-white",
            "infocontainer__titile-black",
            "infocontainer__titile-contrast"
          )}
        >
          Жизнь ВГУВТ
        </span>
        <LiveCards />
      </div>
    </>
  );
});
export default LiveCardContainer;
