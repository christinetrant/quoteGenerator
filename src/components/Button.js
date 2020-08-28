import React from "react";
import "./Button.css";

const Quote = ({ getRandomQuote }) => {
  return (
    <div className="center">
      <button className="glow-on-hover" onClick={getRandomQuote}>
        Random Quote
      </button>
    </div>
  );
};

export default Quote;
