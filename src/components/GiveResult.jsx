import React from 'react'
import './Result.css'
import { useLocation,Link } from 'react-router-dom'
function GiveResult(){
    var numberx=useLocation().state.numberx
    var numbery=useLocation().state.numbery
    var z=useLocation().state.number
    var numberz=0;
    if(z>1){
        numberz=1
    }
    else{
        numberz=0
    };
    
    var resultcode=numberx*100+numbery*10+numberz
    console.log("here is sectionz:"+numberz)
    console.log("there is the resultcode in giveresult:"+resultcode)
    return(
        <div>
            <Link to="/result"
                state={{
                  resultcode:resultcode
                }}
          >
            查看结果，喵喵喵
          </Link>
        </div>
    )

}
export default GiveResult