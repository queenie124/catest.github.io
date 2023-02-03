import React from 'react'
import './TestPage.css'
import {Link,useLocation} from "react-router-dom"
function TestPage5() {
    const numberx=useLocation().state.numberx
    const numbernow=useLocation().state.number
    console.log(numbernow)
    return (
      <div>
        <div class='whiteFont'>
          <p>5.请选择一个四边形：</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage6"
                state={{
                    numberx:numberx,
                    number:1+numbernow,
                }}
          >
            a)三角形
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage6"
                state={{
                    numberx:numberx,
                    number:0+numbernow,
                }}>
                b)长方形
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage5