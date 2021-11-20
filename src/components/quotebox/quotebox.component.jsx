import React, { Component } from "react";
import './quotebox.styles.css';
import {BottomBar} from '../bottombar/bottombar.component.jsx'

export class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: this.props.quoteIndex,
    };
  }

  handleClick = (event) => {
    console.log(`handleClick value is ${event.target.value}`);
    switch(event.target.value) {
      case "generateRandomIndex":
        this.setState((state) => ({
          quoteIndex: this.props.handlers.generateRandomIndex(this.props.quotes)
        }));
        break;
      default:
        this.setState({
          quoteIndex: 0
        });
    }
  }

  render() {

    const { quote, author } = this.props.quotes[this.state.quoteIndex]; // Features to implement: source, speaker, tags, topic

    return (
      <div className="quote-box">
        <div className="text">
          <h1 className="quote">{quote}</h1>
        </div>
        <div className="quote-functions">
          <a href={`http://twitter.com/intent/tweet?text=${quote} ${author}`}
            className="tweet-quote"
            target="_blank"
            rel="noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
          {author && <span className="author">~ {author}</span>}
        </div>
        {this.props.bottombar &&
        <BottomBar
          quotes={this.props.quotes}
          quoteIndex = {this.state.quoteIndex}
          handleClick={this.handleClick} />}
      </div>
    );
  }
};