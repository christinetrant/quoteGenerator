import React, { Component, Fragment } from "react";
import Quote from "../components/Quote";
import Button from "../components/Button";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: null,
      randomQuote: "",
      // isConnected: false,
    };
  }

  componentDidMount() {
    const API = "https://type.fit/api/quotes";
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].text);
        return this.setState({ quotes: data });
        // console.log("state", this.state.quotes[0].text);
      });
  }

  getRandomQuote = () => {
    const { quotes } = this.state;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // console.log(randomQuote);
    this.setState({ randomQuote });
  };
  render() {
    // return <Quote quote={this.state.quotes} />;
    return (
      <Fragment>
        <Quote
          randomQuote={this.state.randomQuote}
          isConnected={this.state.isConnected}
        />
        <Button getRandomQuote={this.getRandomQuote} />
      </Fragment>
    );
  }
}

export default App;
