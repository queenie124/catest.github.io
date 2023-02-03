import React from 'react'
import './Result.css'
import heimao from '../assets/pics/heimao.png'
import buou from '../assets/pics/buou.png'
import jiba from '../assets/pics/jiba.png'
import jumao from '../assets/pics/jumao.png'
import kuangong from '../assets/pics/kuangong.png'
import mianyin from '../assets/pics/mianyin.png'
import sanhua from '../assets/pics/sanhua.png'
import { useLocation,Link } from 'react-router-dom'

function Result() {
    
    var code=useLocation().state.resultcode
    console.log("my resultcode in resultpage is:"+code)
    if (code==0){
        
        return(
            <div>
            <img src={heimao} alt="result "></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
        )
    }
    else if(code==111){
        return(
            <div>
            <img src={buou} alt="result"></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
            
        )
    }
    else if(code==110){
        return(
            <div>
            <img src={jiba} alt="result"></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
        )
    }
    else if(code==11){
        return(
            <div>
            <img src={lihua} alt="result"></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
        )
    }
    else if(code==10){
        return(
            <div>
            <img src={kuangong} alt="result"></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
        )
    }
    else if(code==1){
        return(
            <div>
            <img src={sanhua} alt="result"></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
        )
    }
    else if(code==100){
        return(
            <div>
            <img src={jumao} alt="result"></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
        )
    }
    else{
        return(
            <div id="wrapper">
            <img src={mianyin} alt="result"></img>
            <button class="ui button" ><Link to="/letter">叮咚，来自人类朋友的一封信</Link></button>
            </div>
        )
    }
    

    
   
  }
  
export default Result