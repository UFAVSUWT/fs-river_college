import React, { useState } from "react";
import PropTypes from "prop-types";
const Collapse = ({ fac }) => {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);

  return (
    <div className="collapse_wrapper">
      <div
        onClick={() => setIsShow(!isShow)}
        className="collapse_wrapper-header"
      >
        "Как можно оформить социальную стипендию?"
      </div>
      <div
        className={` ${
          isShow ? "collapse_wrapper-content " : "collapse_wrapper-isShow"
        }`}
      >
        На основании Положения о стипендиальном обеспечении и других формах
        материальной поддержки студентов и аспирантов «ВГУВТ», п. 7.1.5,
        социальная стипендия начисляется социально незащищенным категориям
        курсантов. Для оформления социальной стипендии – необходимо на отделение
        СПО (2 этаж) представить справку о том, что Вы являетесь получателем
        государственной социальной помощи и написать соответствующее заявление.
        Выплата государственной социальной стипендии курсантам осуществляется
        ежемесячно: начиная с момента обращения на отделение с подтверждающим
        документом, по месяц прекращения действия основания ее назначения.
      </div>
    </div>
  );
};
Collapse.propTypes = {
  fac: PropTypes.object,
};
export default Collapse;
