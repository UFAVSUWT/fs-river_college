import { observer } from "mobx-react-lite";
import React from "react";
import images from "../../../../store/images";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import Image from "../../../common/image/Image";
import InfoContainer from "../../../common/infoContainer/InfoContainer";
import NewsCardContainer from "../../../ui/newsCardContainer/NewsCardContainer";

import { NewsStore } from "../../../../store/news-store";
import { toJS } from "mobx";
import HrLine from "../../../common/hrLine/HrLine";
const InfoPage = observer(() => {
  const { news, isLoadingNews } = NewsStore;

  const main = toJS(news)
    .reverse()
    .find((e) => e.main === true);

  if (isLoadingNews) return "Загрузка...";
  return (
    <div
      style={{ fontSize: toggleFontSize(18) }}
      className={`infopage-main ${toggleClassName(
        "infopage-main ",
        "infopage-white",
        "infopage-black",
        "infopage-contrast"
      )}`}
    >
      {main && (
        <InfoContainer
          key={main.id}
          title="Новости университета"
          newsTitle={main.title}
          btnTitle="Все новости"
          image={
            <Image
              src={process.env.REACT_APP_API_URL + main.image}
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          }
        >
          <div dangerouslySetInnerHTML={{ __html: main.text }}></div>
        </InfoContainer>
      )}
      <HrLine />
      {images.image !== "off" ? <NewsCardContainer /> : null}
    </div>
  );
});
export default InfoPage;
