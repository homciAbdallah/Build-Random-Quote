//import { useState } from 'react'
//import quotes from './assets/quotes.json'
 //import './jqery.jsx'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from './Redux/const'




function App() {
const quote=useSelector(state=>state)
const dispatchQuote=useDispatch()
const twitterUrl=encodeURIComponent('"' + quote.quote + '" ' + quote.author)
const tumblrUrlAuthor=encodeURIComponent(quote.author)
const tumblrUrlQuote=encodeURIComponent(quote.quote)

  return (
    <>
  
 <div id="wrapper"> 
<div id="quote-box">

<div className="quote-text">
    <i className="fa fa-quote-left"> </i>
     <span id="text">{ quote.quote }</span> 
    <i className="fa fa-quote-right"> </i>
        </div>
        <div className="quote-author" >- <span id="author">{quote.author}</span></div>
        <div className="buttons">
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top" href={"https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="+ twitterUrl}
           >
            <i className="fa fa-twitter"></i>
          </a>
          <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" 
          href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption="+tumblrUrlAuthor +"content=" + tumblrUrlQuote  + "canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"} >
            <i className="fa fa-tumblr"></i>
          </a>

            <button className="button" id="new-quote" onClick={()=>dispatchQuote({type:ADD})} >New quote</button>
              
        </div>
    

        
      
</div>
<div className="footer">by <a href="https://github.com/homciAbdallah">Homci/A</a></div>
</div>  

 
    </>
  )
}

export default App
