import React from 'react'
import './Letter.css'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import letterpic from '../assets/letterpic.png'
import qrcode from '../assets/qrcode.png'
function Letter(){
    return(
    <div>
        <div class="letterpic">
            <img src={letterpic}/>
        </div>
        
        <div class="whiteFont">
            <p>爱之家公众号二维码，领养/捐赠/详细情况请扫描：</p>
        </div>
        
        <div id="qrcode">
            <img src={qrcode} />
        </div>
        <div class="ui divider"></div>
        <div class="ui small images">
            <img src={pic3}/>
            <img src={pic2}/>
            <img src={pic1}/>
        </div>
    </div>
    )
    
}
export default Letter