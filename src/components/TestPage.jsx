import React from 'react'
import './TestPage.css'
import {Link} from "react-router-dom"
function TestPage() {
   
    return (
      <div>
        <div class='whiteFont'>
          <p>1.刚吃完晚饭，突然收到party invitation，你打算：</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage2"
                state={{
                  number:1,
                }}
          >
            a)兴奋，冲！
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage2"
                state={{
                  number:0,
                }}
          >b)打扰我睡大觉，你自己去玩吧！
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage