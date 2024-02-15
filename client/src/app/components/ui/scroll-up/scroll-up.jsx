import React, { useEffect, useState } from "react";
const ScrollUp = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  // eslint-disable-next-line no-unused-vars
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-up ${scrollY > 400 ? "" : "scroll-up_hide"}`}
      onClick={handlerScrollUp}
    ></div>
  );
};

export default ScrollUp;
