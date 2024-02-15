import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "../image/Image";
import { toggleClassName } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
const ArticleContainer = observer(({ title, name, paragraph, imageArray }) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(true);
  };
  const toggleHidden = () => {
    setIsShow(false);
  };

  return (
    <section className="articleContainer">
      <div
        className={!isShow ? toggleClassName("items-text", "", "", "") : null}
        onClick={() => toggleShow()}
      >
        {title ? <h1>{title}</h1> : null}
        <p>
          <b>
            <i>{name}</i>
          </b>{" "}
          {paragraph}
        </p>
        {imageArray ? (
          <div className="employment__image-container ">
            {imageArray.map((element) => (
              <Image
                key={element.src}
                src={element.src}
                className="employment__image"
                width={element.width}
                height={element.height}
              />
            ))}
          </div>
        ) : null}
      </div>
      {isShow ? (
        <div
          className={toggleClassName(
            "articleContainer__btn",
            "articleContainer__btn-hidden",
            "articleContainer__btn-hidden",
            "articleContainer__btn-hidden"
          )}
        >
          <button onClick={() => toggleHidden()}>Скрыть</button>
        </div>
      ) : null}
    </section>
  );
});
ArticleContainer.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  paragraph: PropTypes.string,
  imageArray: PropTypes.array,
};
export default ArticleContainer;
