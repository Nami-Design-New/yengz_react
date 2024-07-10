import React from "react";
import fav from "../Assets/images/logo.svg";
const Loader = () => {
  return (
    <div className="loader">
      <img src={fav} alt="fav" />
      <span></span>
    </div>
  );
};

export default Loader;
