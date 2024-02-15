import { makeAutoObservable } from "mobx";

const getLocalImages = () => {
  const currentImages = localStorage.getItem("images");
  const image = currentImages ? currentImages : "color";
  return image;
};
class Images {
  image = getLocalImages();

  constructor() {
    makeAutoObservable(this);
  }
  color() {
    localStorage.setItem("images", "color");
    return (this.image = "color");
  }
  gray() {
    localStorage.setItem("images", "gray");
    return (this.image = "gray");
  }
  on() {
    localStorage.setItem("images", "on");
    return (this.image = "on");
  }
  off() {
    localStorage.setItem("images", "off");
    return (this.image = "off");
  }
}
export default new Images();
