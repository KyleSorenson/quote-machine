import React from 'react';
import './App.css';

const QUOTES = require('./quotes.json');

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0
    }
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote = () => {
    this.setState((state) => ({
      quoteIndex: Math.floor(Math.random() * (QUOTES.length))
    }));
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text"><h1 id="quote">{QUOTES[this.state.quoteIndex].quote}</h1></div>
        <div id="author">{QUOTES[this.state.quoteIndex].author}</div>
        <div id="links">
          <button
            id="new-quote"
            onClick={this.newQuote}>
              New Quote
          </button>
          <a
            id="tweet-quote"
            href={
              "http://twitter.com/intent/tweet?text=" + 
              QUOTES[this.state.quoteIndex].quote + 
              ' -' + 
              QUOTES[this.state.quoteIndex].author
            }
            target="_blank"
            rel="noreferrer">
              Tweet Quote
          </a>
        </div>
      </div>
    );
  }
};

function App() {
  return (
    <div id="container">
      <QuoteBox />
    </div>
  );
}

export default App;