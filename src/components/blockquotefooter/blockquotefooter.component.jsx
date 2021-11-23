import React from "react";
import './blockquotefooter.styles.scss';

export const BlockQuoteFooter = ({speaker, author, topic, source, visible}) => {
  
  return (
    <section className="blockquote-footer" style={{opacity: visible}}>
      <span className="blockquote-footer__dash">
        {
          (speaker || author || topic || source) && 
            <> 
              —
            </>
        }
      </span>
      <span className="blockquote-footer__source">
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
  )
}