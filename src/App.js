import React from "react";
import "./App.css";

function App() {
  return (
    <div className="center">
      {/* <div className="slanted">
        <h2>Hello World!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          et debitis pariatur perferendis adipisci doloribus aspernatur ea quo
          illum a.
        </p>
      </div> */}

      <blockquote>
        <p>
          Minimalists always act so superior, like “Oh, we’re not hoarding.”
          That’s bullshit, they’re just hoarding space.
        </p>
        <cite>
          <a href="https://www.brucelawson.co.uk/2013/on-citing-quotations-again/">
            Douglas Coupland
          </a>
        </cite>
        <div className="slanted"></div>
      </blockquote>
    </div>
  );
}

export default App;
