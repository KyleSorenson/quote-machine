import React from 'react';
import './App.scss';
import { BlockQuote } from './components/blockquote/blockquote.component.jsx';

const KylesQuoteCollection = require('./quotes.json');

const fccProjectURL = "https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine";
const fccCurriculumURL = "https://www.freecodecamp.org/learn/front-end-development-libraries";

function App() {
  return (
    <div id="container">
      <header className="heading">
        <h1 className="heading__main">Random Quote Machine</h1>
        <span className="heading__sub"><a href={fccProjectURL}>Project 1</a> from Free Code Camp's <a href={fccCurriculumURL}>Front End Development Libraries Curriculum</a></span>
      </header>
      <BlockQuote 
        quotes={KylesQuoteCollection} 
        buttons={true}/>
      <footer className="footer">
        <span>Built Using</span> 
        <a href="https://reactjs.org" target="_top" className="footerlink react"><i className="fab fa-react"></i></a>
        <a href="https://sass-lang.com" target="_top" className="footerlink sass"><i className="fab fa-sass"></i></a>
        |
        <span><a href="https://github.com/KyleSorenson/quote-machine">GitHub Repo</a></span> 
      </footer>
      <div className="bottom-gradient"></div>
    </div>
  );
}

export default App;