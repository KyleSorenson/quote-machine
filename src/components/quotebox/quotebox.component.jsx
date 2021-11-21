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

    const { quote, author, speaker, source } = this.props.quotes[this.state.quoteIndex]; // Features to implement: source, speaker, tags, topic

    return (
      <blockquote className="blockquote">
        <hr className="blockquote-divider"/>
        <section className="blockquote-body">
          <span className="blockquote-quotation-mark">&#8220;</span>
          <span className="blockquote-text">{quote}</span>
        </section>
        <footer className="blockquote-footer">
          {/* <a href={`http://twitter.com/intent/tweet?text=${quote} ${author}`}
            className="tweet-quote"
            target="_blank"
            rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a> */}
          { 
            speaker ? 
            <span className="author">– {speaker}</span> :
            author ? 
            <span className="author">– {author}</span> : 
            ""
          }
          {
            source && (author || speaker) ? 
            <span className="author">, <em>{source}</em></span> :
            source ? 
            <span className="author">— {source}</span> :
            ""
          }
        </footer>
        <hr className="blockquote-divider"/>
        {this.props.bottombar &&
        <BottomBar
          quotes={this.props.quotes}
          quoteIndex = {this.state.quoteIndex}
          handleClick={this.handleClick} />}
      </blockquote>
    );
  }
};