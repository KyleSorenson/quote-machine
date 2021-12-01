import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../blockquote/blockquote.styles.scss';
import { Divider } from "../divider/divider.component";
import { BlockQuoteFooter } from "../blockquotefooter/blockquotefooter.component";

const generateRandomIndex = (arr) => {
  return Math.floor(Math.random() * (arr.length))
};

const makeURLString = (collection, index) => {
  return collection[index].quote.toLowerCase()
  .split(' ').slice(0,4)
  .map(word => word.match(/[a-z]+/g).join(''))
  .join('-');
};

export const BlockQuoteHome = ({ quotes, buttons }) => {

  const [quoteIndex, setQuoteIndex] = useState(generateRandomIndex(quotes));
  const [quoteOpacity, setQuoteOpacity] = useState('1');
  const { quote, author, speaker, source, topic } = quotes[quoteIndex];

  const transitionToRandomQuote = () => {
    setQuoteOpacity('0');
    setTimeout(()=>{
      setQuoteIndex(generateRandomIndex(quotes));
    },500);
    setTimeout(()=>{
      setQuoteOpacity('1')
    },550);
  };

  return (
    <blockquote className="blockquote" id="quote-box">

      <Divider buttons={buttons}>
        <a href={`http://twitter.com/intent/tweet?text=${quote} ${author}`}
          className="button-bar__button button-bar__button--hover"
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"> 
            <i className="fab fa-twitter button-bar__button--twitter-icon"></i>
        </a>
      </Divider>

      <section className="blockquote-body">
        <span className="blockquote-body__quotation-mark" style={{opacity: quoteOpacity}}>&#8220;</span>
        <span className="blockquote-body__text" id="text" style={{opacity: quoteOpacity}}>{quote}</span>
      </section>

      { (speaker || author || topic || source) && <BlockQuoteFooter 
        speaker={speaker}
        author={author}
        topic={topic}
        source={source}
        quoteOpacity={quoteOpacity}
        /> }

      <div className="blockquote__spacer"></div>

      <Divider buttons={buttons}>
        <Link 
          className="button-bar__button button-bar__button--hover"
          id="new-quote" 
          onClick={transitionToRandomQuote}
          to={`/${makeURLString(quotes, generateRandomIndex(quotes))}`}>
            <span className="button-bar__button--innertext">New Quote</span>
        </Link>
      </Divider>

    </blockquote>
  )
};