import React from 'react'
import './TestPage.css'
import {Link,useLocation} from "react-router-dom"
function TestPage8() {
    const numberx=useLocation().state.numberx
    const numbery=useLocation().state.numbery
    const numbernow=useLocation().state.number
    console.log(numbernow)
    return (
      <div>
        <div class='whiteFont'>
          <p>8.和朋友去海边玩水上摩托艇，ta要迟到了，你感觉：</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage9"
                state={{
                    numberx:numberx,
                    numbery:numbery,
                    number:1+numbernow,
                }}
          >
             a)生气愤怒，揣手手
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage9"
                state={{
                    numberx:numberx,
                    number:0+numbernow,
                    numbery:numbery,
                }}>
                b)无所谓啦，重点是和朋友在一起！
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage8