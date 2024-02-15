import React from "react";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import MinObr from "../../../assets/img/partners/minobr.png";
import RosObrNadzor from "../../../assets/img/partners/Emblem_of_Rosobrnadzor.png";
import RosMorRechFlot from "../../../assets/img/partners/Rosmorrechflot.gif";
import MinTransporta from "../../../assets/img/partners/mintransp2.gif";
import Image from "../../common/image/Image";
const PartnersContainer = observer(() => {
  return (
    <section
      className={toggleClassName(
        "_container",
        "_container-white",
        "_container-black",
        "_container-contrast"
      )}
    >
      <div className={`partners ${toggleClassName(
        "partners",
        "partners-white",
        "partners-black",
        "partners-contrast"
      )}`}>
        <h3>Наши партнеры</h3>
        <div
          style={{ fontSize: toggleFontSize(14) }}
          className="partners_container"
        >
          <a href="https://минобрнауки.рф" target={"_blank"} rel="noreferrer">
            <div className="partners_container-item">
              <Image src={MinObr} width={"64px"} height={"70px"} />
              <h4>Министерство образования и науки РФ</h4>
            </div>
          </a>
          <a
            href="https://obrnadzor.gov.ru/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="partners_container-item">
              <Image src={RosObrNadzor} width={"92px"} height={"70px"} />
              <h4>Рособрнадзор</h4>
            </div>
          </a>
          <a href="https://morflot.gov.ru/" target={"_blank"} rel="noreferrer">
            <div className="partners_container-item">
              <Image src={RosMorRechFlot} width={"64px"} height={"70px"} />
              <h4>Федеральное агентство морского и речного транспорта РФ</h4>
            </div>
          </a>
          <a href="https://mintrans.gov.ru/" target={"_blank"} rel="noreferrer">
            <div className="partners_container-item">
              <Image src={MinTransporta} width={"64px"} height={"70px"} />
              <h4>Министерство транспорта</h4>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});
export default PartnersContainer;
