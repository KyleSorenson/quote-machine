import React from 'react';
import './App.scss';
import { BlockQuote } from './components/blockquote/blockquote.component.jsx';

const quotes = require('./quotes.json');
const handlers = {
  generateRandomIndex: function(arr) {
    return Math.floor(Math.random() * (arr.length))
  }
};

function App() {
  return (
    <div id="container">
      <BlockQuote 
        quotes={quotes} 
        quoteIndex={handlers.generateRandomIndex(quotes)} 
        handlers={handlers}
        buttons={true}/>
    </div>
  );
}

export default App;