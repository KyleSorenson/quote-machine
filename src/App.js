import React from 'react';
import './App.css';
import { QuoteBox } from './components/quotebox/quotebox.component.jsx';

const quotes = require('./quotes.json');
const handlers = {
  generateRandomIndex: function(arr) {
    return Math.floor(Math.random() * (arr.length))
  }
};

// let slicedQuote = quotes.slice(0,5);
// slicedQuote.map((i, index) => console.log(index));

function App() {
  return (
    <div id="container">
      <QuoteBox 
        quotes={quotes} 
        quoteIndex={handlers.generateRandomIndex(quotes)} 
        handlers={handlers} 
        bottombar={false}/>
      {/* {
        slicedQuote.map((i, index) => (
          <div key={index}>
            <QuoteBox
              quotes={quotes}
              quoteIndex={index}
              handlers={handlers}
              bottombar={false} />
          </div>
        ))
      } */}
    </div>
  );
}

export default App;