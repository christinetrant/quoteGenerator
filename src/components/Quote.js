import React from "react";
import "./Quote.css";

const Quote = ({ randomQuote }) => {
  return (
    <div className="center">
      <blockquote>
        {/* <p> */}

        <p>{randomQuote !== null && randomQuote.text}</p>
        {/* <p>{isConnected ? randomQuote.text : ``}</p> */}
        {/* </div> */}

        {/* {randomQuote.text} */}
        {/* </p> */}

        {/* If author is null want to hide cite:before */}
        {randomQuote.author !== null ? (
          <cite>- {randomQuote !== null && randomQuote.author}</cite>
        ) : (
          <cite className="hidden">no</cite>
        )}
        <div className="slanted"></div>
      </blockquote>
    </div>
  );
};

export default Quote;
