import React from 'react'
import './TestPage.css'
import {Link,useLocation} from "react-router-dom"
function TestPage6() {
    const numberx=useLocation().state.numberx
    const numbernow=useLocation().state.number
    console.log(numbernow)
    return (
      <div>
        <div class='whiteFont'>
          <p>6.“你好，要一杯qq内内好喝到咩噗茶--</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage7"
                state={{
                  number:1+numbernow,
                  numberx:numberx,
                }}
          >
            a)加xxx小料！“
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage7"
                state={{
                  number:0+numbernow,
                  numberx:numberx,
                }}
          >b)但不要珍珠”
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage6