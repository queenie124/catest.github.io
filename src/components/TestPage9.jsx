import React from 'react'
import './TestPage.css'
import {Link,useLocation} from "react-router-dom"
function TestPage9() {
    var numberx=useLocation().state.numberx
    var numbery=useLocation().state.numbery
    var numbernow=useLocation().state.number
    console.log(numbernow)
    return (
      <div id="wapper">
        <div class='whiteFont'>
          <p>9.开始吵架，你：</p>
          
          <button class="fluid ui button" >
          <Link to="/giveresult"
                state={{
                  number:1+numbernow,
                  numbery:numbery,
                  numberx:numberx,
                }}
          >
            a)吵架第一名！不带脏字也能吵！
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/giveresult"
                state={{
                  number:0+numbernow,
                  numbery:numbery,
                  numberx:numberx,
                }}
          >b)语无伦次，只配在深夜才想起该怎么骂回去，暗暗流泪ToT
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage9