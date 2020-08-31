import React from "react";
import "./Button.css";

const Quote = ({ getSingleQuote }) => {
  return (
    <div className="center">
      <button className="glow-on-hover" onClick={getSingleQuote}>
        Random Quote
      </button>
    </div>
  );
};

export default Quote;
