import React from "react";
import './bottombar.styles.css';

export const BottomBar = ({handleClick}) => {
  
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