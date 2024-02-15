import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
const UniversityEvents = observer(() => {
  return (
    <section
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <h1
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        План ближайщих мероприятий Уфимского филиала "ВГУВТ"
      </h1>
      <p>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FYekaterinburg&showTitle=0&showCalendars=0&showTz=0&showTabs=1&showPrint=1&showDate=1&src=dWZhLnZzdXd0QGdtYWlsLmNvbQ&color=%23039BE5"
          style={{
            border: "0",
            width: "100%",
            "min-height": "700px",
          }}
          title="Calendar"
        ></iframe>
      </p>
    </section>
  );
});
export default UniversityEvents;
