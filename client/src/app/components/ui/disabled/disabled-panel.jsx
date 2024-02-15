import React from "react";
import { observer } from "mobx-react-lite";
import fontSize from "../../../store/fontSize";
import theme from "../../../store/theme";
import { handleThemeMain, toggleClassName } from "../../../utils/disabled";
import images from "../../../store/images";

const Disabled = observer(() => {
  const toggleClassNameFontSize = (original, normal, medium, large) => {
    const currentSize = fontSize.fontSize;
    if (currentSize === "original") return original;
    if (currentSize === "normal") return normal;
    if (currentSize === "medium") return medium;
    if (currentSize === "large") return large;
  };

  return (
    <>
      <div className="header__section-disabled">
        <div className="disabled__container">
          <div
            onClick={() => handleThemeMain()}
            className="disabled__container-back"
          >
            Обычная версия сайта
          </div>
        </div>
        <div className="disabled__container">
          <div className="disabled__container-label">Размер</div>
          <div className="disabled__container-block">
            <div
              onClick={() => fontSize.normal()}
              className={`${toggleClassNameFontSize(
                "disabled__container-block-a",
                "disabled__container-block-a-normal",
                "disabled__container-block-a",
                "disabled__container-block-a"
              )}`}
            >
              А
            </div>

            <div
              onClick={() => fontSize.medium()}
              className={`${toggleClassNameFontSize(
                "disabled__container-block-aa",
                "disabled__container-block-aa",
                "disabled__container-block-aa-medium",
                "disabled__container-block-aa"
              )}`}
            >
              АA
            </div>

            <div
              onClick={() => fontSize.large()}
              className={`${toggleClassNameFontSize(
                "disabled__container-block-aaa",
                "disabled__container-block-aaa",
                "disabled__container-block-aaa",
                "disabled__container-block-aaa-large"
              )}`}
            >
              АAA
            </div>
          </div>
        </div>
        <div className="disabled__container">
          <div className="disabled__container-label">Цвет</div>
          <div className="disabled__container-block">
            <div
              onClick={() => theme.white()}
              className={`${toggleClassName(
                "disabled__container-block-c",
                "disabled__container-block-c-white",
                "disabled__container-block-c",
                "disabled__container-block-c"
              )}`}
            >
              С
            </div>
            <div
              onClick={() => theme.black()}
              className={`${toggleClassName(
                "disabled__container-block-cc",
                "disabled__container-block-cc",
                "disabled__container-block-cc-black",
                "disabled__container-block-cc"
              )}`}
            >
              СC
            </div>
            <div
              onClick={() => theme.contrast()}
              className={`${toggleClassName(
                "disabled__container-block-ccc",
                "disabled__container-block-ccc",
                "disabled__container-block-ccc",
                "disabled__container-block-ccc-contrast"
              )}`}
            >
              СCC
            </div>
          </div>
        </div>
        <div className="disabled__container">
          <div className="disabled__container-label">Изображения</div>
          <div className="disabled__container-block">
            {images.image === "color" ? (
              <div
                onClick={() => images.gray()}
                className="disabled__container-block-gray"
              >
                Чб.
              </div>
            ) : (
              <div
                onClick={() => images.color()}
                className="disabled__container-block-gray"
              >
                Цвет
              </div>
            )}

            <div
              onClick={() => images.on()}
              className="disabled__container-block-active"
            >
              Вкл.
            </div>
            <div
              onClick={() => images.off()}
              className="disabled__container-block-inactive"
            >
              Выкл.
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default Disabled;
