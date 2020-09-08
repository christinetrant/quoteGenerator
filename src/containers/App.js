import React, { Component, Fragment } from "react";
import Quote from "../components/Quote";
import Button from "../components/Button";
import Loader from "../components/Loader";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuotes: null,
      singleQuote: "",
      isConnected: false,
    };
  }

  componentDidMount() {
    this.getAllQuotes();
  }

  getAllQuotes = () => {
    const API = "https://type.fit/api/quotes";
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].text);
        this.setState({
          singleQuote: data[Math.floor(Math.random() * data.length)],
        });
        this.setState({ isConnected: true });
        return this.setState({ allQuotes: data });
        // console.log("state", this.state.allQuotes[0].text);
      });
  };

  getSingleQuote = () => {
    const { allQuotes } = this.state;
    const singleQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    // console.log(singleQuote);
    this.setState({ singleQuote });
  };

  render() {
    return !this.state.isConnected ? (
      <Loader />
    ) : (
      <Fragment>
        <Quote
          singleQuote={this.state.singleQuote}
          isConnected={this.state.isConnected}
        />
        <Button getSingleQuote={this.getSingleQuote} />
      </Fragment>
    );
  }
}

export default App;
