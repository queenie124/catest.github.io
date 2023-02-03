import React from 'react'
import './TestPage.css'

import {Link,useLocation} from "react-router-dom"

function TestPage4() {
    

    const x=useLocation().state.number
    var numberx=0;
    if(x>1){
        numberx=1
    }
    else{
        numberx=0
    };
    console.log("here is sectionx:"+numberx)
    return(
        <div>
        <div class='whiteFont'>
          <p>4.如果可以自己任意布置房间，你的房间会是：</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage5"
                state={{
                    numberx:numberx,
                    number:1,
                }}
          >
            a)彩色的！
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage5"
                state={{
                    numberx:numberx,
                    number:0,
                }}
          >b)同色系风格啦
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage4