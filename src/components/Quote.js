import React from "react";
import "./Quote.css";

const Quote = ({ singleQuote }) => {
  return (
    <div className="center">
      <blockquote>
        <p>{singleQuote !== null && singleQuote.text}</p>

        {/* If author is null want to hide cite:before */}
        {singleQuote !== null && singleQuote.author !== null ? (
          <cite>- {singleQuote.author}</cite>
        ) : (
          // <cite className="hidden">no</cite>
          <cite>- unknown</cite>
        )}
        <div className="slanted"></div>
      </blockquote>
    </div>
  );
};

export default Quote;
