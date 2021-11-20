import React, { Component } from "react";
import './bottombar.styles.css';

export const BottomBar = ({quotes, quoteIndex, handleClick}) => {
  
  const { quote, author } = quotes[quoteIndex]; // Features to implement: source, speaker, tags, topic

  return (
    <div class="bottombar">
      <button
        id="new-quote"
        value="generateRandomIndex"
        onClick={handleClick}
      >
        New Quote
      </button>
    </div>
  )
}