import NavBar from "./components/ui/nav-bar/nav-bar";
import Footer from "./components/ui/footer/Footer";
import { useRoutes } from "react-router";
import routes from "./routes";
import { observer } from "mobx-react-lite";
import fontSize from "./store/fontSize";
import LeftPanel from "./components/ui/left-panel/left-panel";
import ScrollUp from "./components/ui/scroll-up/scroll-up";
import { toggleClassName } from "./utils/disabled";
import { useContext, useEffect } from "react";
import { Context } from "../index";
import { NewsStore } from "./store/news-store";
const App = observer(() => {
  const element = useRoutes(routes());
  const { user } = useContext(Context);
  useEffect(() => {
    user.checkAuthentication();
  }, []);
  const { loadNews } = NewsStore;
  useEffect(() => {
    loadNews();
  }, []);
  const toggleFontSize = () => {
    const size = fontSize.fontSize;
    if (size === "normal") return "18px";
    if (size === "medium") return "22px";
    if (size === "large") return "28px";
  };

  return (
    <>
      <div style={{ fontSize: toggleFontSize() }} className={"app__wrapper"}>
        <div className="app__wrapper-leftPanel">
          <LeftPanel />
        </div>
        <div className="header-wrapper">
          {" "}
          <NavBar />
        </div>
        <div
          className={toggleClassName(
            "main-wrapper",
            "main-wrapper-white",
            "main-wrapper-black",
            "main-wrapper-contrast"
          )}
        >
          {element}
          <ScrollUp />
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
});

export default App;
