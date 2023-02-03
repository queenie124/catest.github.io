import React from "react";
import catIcon from './assets/catIcon.png'
import './App.css'
import {Navigate} from "react-router-dom"


function App() {
  const [goToTest, setGoToTest]=React.useState(false);
 
  if(goToTest){
    return <Navigate to ="/testpage"/>;
  }
  return (
    <div>
      <h1 class="ui center alighned icon header">
              <div class="whiteFont"> 
                <img src={catIcon} alt="catIcon"></img>
                <div class="content" >
                  喵喵喵，你是哪位流浪猫？
                  <div class="sub header">Meow meow meow, who are you</div>
                </div>
              </div>
      </h1>
      <div>
          <button class="ui right labeled icon button" onClick={()=>{setGoToTest(true )}}>
            <i class="right arrow icon" ></i>
              喵！
          </button>
      
      </div>
      
    </div>
  )
}

export default App
