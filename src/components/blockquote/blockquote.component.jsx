import React, { Component } from "react";
import './blockquote.styles.scss';
import { Divider } from "../divider/divider.component";
import { BlockQuoteFooter } from "../blockquotefooter/blockquotefooter.component";

export class BlockQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: this.props.quoteIndex,
      visible: 1
    };
  }

  generateRandomIndex = () => {
    this.setState({
      visible: 0
    });
    setTimeout(()=>{
      this.setState({
        quoteIndex: this.props.handlers.generateRandomIndex(this.props.quotes)
      });
    },500);
    setTimeout(()=>{
      this.setState({
        visible: 1
      });
    },550);
  }

  render() {

    const { quote, author, speaker, source, topic } = this.props.quotes[this.state.quoteIndex]; // Features to implement: tags

    return (
      <blockquote className="blockquote">

        <Divider buttons={this.props.buttons}>
          <a href={`http://twitter.com/intent/tweet?text=${quote} ${author}`}
            className="button-bar__button button-bar__button--hover"
            target="_blank"
            rel="noreferrer"> 
              <i className="fab fa-twitter button-bar__button--twitter-icon"></i>
          </a>
        </Divider>

        <section className="blockquote-body">
          <span className="blockquote-body__quotation-mark" style={{opacity: this.state.visible}}>&#8220;</span>
          <span className="blockquote-body__text" style={{opacity: this.state.visible}}>{quote}</span>
        </section>

        <BlockQuoteFooter 
          speaker={speaker}
          author={author}
          topic={topic}
          source={source}
          visible={this.state.visible}/>

        <Divider buttons={this.props.buttons}>
          <button 
            className="button-bar__button button-bar__button--hover" 
            onClick={this.generateRandomIndex}>
              New Quote
          </button>
        </Divider>

      </blockquote>
    );
  }
};