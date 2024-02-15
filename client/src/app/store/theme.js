import { makeAutoObservable } from "mobx";

const getLocalTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  const theme = currentTheme ? currentTheme : "main";
  return theme;
};
class Theme {
  theme = getLocalTheme();

  constructor() {
    makeAutoObservable(this);
  }

  main() {
    localStorage.setItem("theme", "main");
    return (this.theme = "main");
  }
  white() {
    localStorage.setItem("theme", "white");
    return (this.theme = "white");
  }
  black() {
    localStorage.setItem("theme", "black");
    return (this.theme = "black");
  }
  contrast() {
    localStorage.setItem("theme", "contrast");
    return (this.theme = "contrast");
  }
}
export default new Theme();
