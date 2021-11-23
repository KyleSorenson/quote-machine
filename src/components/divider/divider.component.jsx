import React from "react";
import './divider.styles.scss';

export const Divider = ({children, buttons}) => {
  
  return (
    <div className="divider">
      <div className="divider__top-container">
        <div className="button-bar">
          { buttons && children }
        </div>
      </div>
      <div className="divider__bottom-container">
        <hr className="divider__hr"/>
      </div>
    </div>
  )
}