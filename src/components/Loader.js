import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      {/* <div className="slanted"></div> */}
    </div>
  );
};

export default Loader;
