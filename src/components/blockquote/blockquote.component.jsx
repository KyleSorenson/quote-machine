import React, { Component } from "react";
import './blockquote.styles.scss';
import { Divider } from "../divider/divider.component";
import { BlockQuoteFooter } from "../blockquotefooter/blockquotefooter.component";

const generateRandomIndex = (arr) => {
  return Math.floor(Math.random() * (arr.length))
}

export class BlockQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: generateRandomIndex(this.props.quotes),
      quoteOpacity: 1
    };
  }

  transitionToRandomQuote = () => {
    this.setState({
      quoteOpacity: 0
    });
    setTimeout(()=>{
      this.setState({
        quoteIndex: generateRandomIndex(this.props.quotes)
      });
    },500);
    setTimeout(()=>{
      this.setState({
        quoteOpacity: 1
      });
    },550);
  }

  render() {

    const { quote, author, speaker, source, topic } = this.props.quotes[this.state.quoteIndex]; // Features to implement: tags

    return (
      <blockquote className="blockquote" id="quote-box">

        <Divider buttons={this.props.buttons}>
          <a href={`http://twitter.com/intent/tweet?text=${quote} ${author}`}
            className="button-bar__button button-bar__button--hover"
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"> 
              <i className="fab fa-twitter button-bar__button--twitter-icon"></i>
          </a>
        </Divider>

        <section className="blockquote-body">
          <span className="blockquote-body__quotation-mark" style={{opacity: this.state.quoteOpacity}}>&#8220;</span>
          <span className="blockquote-body__text" id="text" style={{opacity: this.state.quoteOpacity}}>{quote}</span>
        </section>

        { (speaker || author || topic || source) && <BlockQuoteFooter 
          speaker={speaker}
          author={author}
          topic={topic}
          source={source}
          quoteOpacity={this.state.quoteOpacity}
          /> }

        <div className="blockquote__spacer"></div>

        <Divider buttons={this.props.buttons}>
          <button 
            className="button-bar__button button-bar__button--hover"
            id="new-quote" 
            onClick={this.transitionToRandomQuote}>
              New Quote
          </button>
        </Divider>

      </blockquote>
    );
  }
};