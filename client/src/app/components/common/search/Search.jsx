import React from "react";
import { ReactComponent as SearchLogo } from "../../../assets/svg/search.svg";
const Search = () => {
  return (
    <>
      <div>
        <div className="header__section3-btn-margin header__search">
          <span className="icon">
            <object>
              <SearchLogo />
            </object>
          </span>
        </div>{" "}
      </div>
    </>
  );
};
export default Search;
