import React, { Component } from "react";
import './quotebox.styles.css';
import {BottomBar} from '../bottombar/bottombar.component.jsx'

export class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: this.props.quoteIndex
    };
  }

  handleClick = (event) => {
    console.log(`handleClick value is ${event.target.value}`);
    switch(event.target.value) {
      case "generateRandomIndex":
        this.setState((state) => ({
          quoteIndex: this.props.handlers.generateRandomIndex(this.props.quotes)
        }));
        break
      default:
        this.setState({
          quoteIndex: 0
        });
    }
  }

  render() {

    const { quote, author, speaker, source, topic } = this.props.quotes[this.state.quoteIndex]; // Features to implement: tags

    return (
      <blockquote className="blockquote">


        {/* Component Candidate (Footer Parody / Rename Styles)*/}
        <header className="blockquote-footer">
          <div className="blockquote-footer-container-top">
            

            {/* Component Candidate */}
            <div className="blockquote-footer-elements">
              <a href={`http://twitter.com/intent/tweet?text=${quote} ${author}`}
                className="blockquote-footer-button"
                target="_blank"
                rel="noreferrer"> 
                <i className="fab fa-twitter twitter-icon"></i>
              </a>
            </div>


          </div>
          <div className="blockquote-footer-container-bottom">
            <hr className="blockquote-divider"/>
          </div>
        </header>


        <section className="blockquote-body">
          <span className="blockquote-quotation-mark">&#8220;</span>
          <span className="blockquote-text">{quote}</span>
        </section>


        {/* Component Candidate - Don't Render When There's No Speaker / Author / Topic, etc...*/}
        <section className="blockquote-attribution">
          <span className="blockquote-attribution-dash">
            {
              (speaker || author || topic || source) && 
                <> 
                  —
                </>
            }
          </span>
          <span className="blockquote-attribution-source">
            { 
              speaker ? 
                <> 
                  {speaker} 
                </>
                : author ? 
                  <> 
                    {author} 
                  </>
                  : ""
            }
            {
              topic && (author || speaker) ?
                  <>
                    &nbsp;on {topic}
                  </>
                : topic ?
                  <>
                    {topic}
                  </> 
                  : ""
            }
            {
              source && (author || speaker || topic) ? 
                <> 
                  , <em>{source}</em> 
                </> :
                source ? 
                  <> 
                    {source} 
                  </>
                  : ""
            }
          </span>
        </section>


        {/* Component Candidate (Header Parody / Rename Styles)*/}
        <footer className="blockquote-footer">
          <div className="blockquote-footer-container-top">


            {/* Component Candidate */}
            <div className="blockquote-footer-elements">
              <button 
                className="blockquote-footer-button" 
                value="generateRandomIndex"
                onClick={this.handleClick}>
                New Quote
              </button>
            </div>

          </div>
          <div className="blockquote-footer-container-bottom">
            <hr className="blockquote-divider"/>
          </div>
        </footer>

        {this.props.bottombar &&
        <BottomBar
          quotes={this.props.quotes}
          quoteIndex = {this.state.quoteIndex}
          handleClick={this.handleClick} />}
      </blockquote>
    );
  }
};