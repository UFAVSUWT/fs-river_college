import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as Vk } from "../../../assets/svg/vk.svg";
import {
  toggleClassName,
  toggleFontSize,
  toggleIconColor,
} from "../../../utils/disabled";
const Footer = observer(() => {
  return (
    <footer
      style={{ fontSize: toggleFontSize(18) }}
      className={toggleClassName(
        "footer",
        "footer-white",
        "footer-black",
        "footer-contrast"
      )}
    >
      <div className="footer__container _container">
        <div className="footer__vguvt">
          <div className="">ВГУВТ 2022</div>
          <a href="https://vk.com/uf_vsuwt" target={"_blank"} rel="noreferrer">
            <Vk className="footer__vk" />
          </a>
        </div>
        <div className="footer__logo">
          <NavLink to="">
            <object>
              <RiverUniversityLogo
                fill={toggleIconColor("#0C1C2B", "", "#000")}
              />
            </object>
          </NavLink>
        </div>

        <div className="footer__collegeInfo">
          <table>
            <tbody>
              <tr>
                <td>Наш адрес:</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2">450017,ул. Ахметова, 275,</td>
              </tr>
              <tr>
                <td colSpan="2">Уфа, Республика Башкортостан</td>
              </tr>
              <tr>
                <td> Контакты:</td>
                <td></td>
              </tr>
              <tr>
                <td>Тел./факс:</td>
                <td>8(347) 215-14-00</td>
              </tr>
     
              <tr>
                <td>e-mail:</td>
                <td>uf-vsuwt@uf-vsuwt.ru</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
});
export default Footer;
