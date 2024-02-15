import { makeAutoObservable } from "mobx";

const getLocalFontSize = () => {
  const currentFontSize = localStorage.getItem("fontSize");
  const fontSize = currentFontSize ? currentFontSize : "original";
  return fontSize;
};
class FontSize {
  fontSize = getLocalFontSize();

  constructor() {
    makeAutoObservable(this);
  }
  original() {
    localStorage.setItem("fontSize", "original");
    return (this.fontSize = "original");
  }
  normal() {
    localStorage.setItem("fontSize", "normal");
    return (this.fontSize = "normal");
  }
  medium() {
    localStorage.setItem("fontSize", "medium");
    return (this.fontSize = "medium");
  }
  large() {
    localStorage.setItem("fontSize", "large");
    return (this.fontSize = "large");
  }
}
export default new FontSize();
