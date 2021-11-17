import './App.css';

const QUOTES = [
  { 
    quote: "I Came. I Saw. I Conquered.",
    author: "Julius Caesar" 
  },
  { 
    quote: "To be or not to be? That is the question.",
    author: "William Shakespeare" 
  },
]

function QuoteBox(props) {
  return(
    <div id="quote-box">
      <div id="text"><h1>"{props.quote}"</h1></div>
      <div id="author">~{props.author}</div>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote" href="kylesorensonmusic.com">Tweet Quote</a>
    </div>
  );
}


function App() {
  return (
    <QuoteBox 
      quote={QUOTES[0].quote}
      author={QUOTES[0].author}/>
  );
}

export default App;
