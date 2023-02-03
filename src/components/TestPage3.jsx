import React from 'react'
import './TestPage.css'
import {Link,useLocation} from "react-router-dom"
function TestPage3() {
    
    const numbernow=useLocation().state.number
    console.log(numbernow)
    return (
      <div>
        <div class='whiteFont'>
          <p>3.和以前班上同学聚餐吃火锅时，你涮的鸭肠不见了，你开始：</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage4"
                state={{
                  number:1+numbernow,
                }}
          >
            a)“有人看见我的鸭肠吗？”（捞捞捞...）
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage4"
                state={{
                  number:0+numbernow,
                }}
          >b)呜呜，默默再涮一根。
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage3