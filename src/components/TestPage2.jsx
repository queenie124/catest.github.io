import React from 'react'
import './TestPage.css'
import {Link,useLocation} from "react-router-dom"
function TestPage2() {
    
    const numbernow=useLocation().state.number
    console.log(numbernow)
    return (
      <div>
        <div class='whiteFont'>
          <p>2.在公园碰到五年没见的朋友，你第一反应：</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage3"
                state={{
                  number:1+numbernow,
                }}
          >
            a)“啊啊啊啊啊田呐好久不见！！”
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage3"
                state={{
                  number:0+numbernow,
                }}
          >b)玛雅，，憋看到我。。。
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage2