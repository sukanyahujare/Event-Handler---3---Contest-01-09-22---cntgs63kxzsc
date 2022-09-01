import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
   // use console.log
    
    if(event.target.id == "text-input"){
      setInput(event.target.value)
      console.log("Input in #text-input is"+""+input);
    }
    else{
      setNum(event.target.value)
      console.log("input in #text-input is"+""+num)
    }
    
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} value={input}
       onChange={(e) => handleInput(e)}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'}
       value={num} onChange={(e) => handleInput(e)}
       />
      <br/>
    </div>
  )
}


export default App;
