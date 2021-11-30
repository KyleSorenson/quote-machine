import React from "react";
import './blockquotefooter.styles.scss';

export const BlockQuoteFooter = ({speaker, author, topic, source, quoteOpacity}) => {
  
  return (
    <section className="blockquote-footer" id="author" style={{opacity: quoteOpacity}}>
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