import React from 'react'
import './TestPage.css'

import {Link,useLocation} from "react-router-dom"

function TestPage7() {
    
    const numberx=useLocation().state.numberx
    const y=useLocation().state.number
    var numbery=0;
    if(y>1){
        numbery=1
    }
    else{
        numbery=0
    };
    console.log("here is sectiony:"+numbery)
    return(
        <div>
        <div class='whiteFont'>
          <p>7.在排队买糯玉米时，有人插队到你前面，你会：</p>
          
          <button class="fluid ui button" >
          <Link to="/testpage8"
                state={{
                  number:1,
                  numbery:numbery,
                  numberx:numberx
                }}
          >
            a)“哒姐，你是不是有点毛病”（脱口而出
          </Link>
          
          </button>
          <p></p>
          <button class="fluid ui button">
          <Link to="/testpage8"
                state={{
                  number:0,
                  numbery:numbery,
                  numberx:numberx
                }}
          > b)os：***气死我了，，，（咬牙沉默
          </Link>
         
          </button>
        </div>
        <p/>
        
        
      </div>
    )
  }
  
export default TestPage7