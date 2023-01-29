import { useState } from 'react';
import App2 from './App2';

function App(){
    let message="Coming from root app.js";
    const handleclick=()=>{
        console.log("Clicked.....");
        setCount1(count+1);
    };

    const handleclick1=()=>{
      console.log("Done clicking...");
      setCount2(cnt+1)
    }

    const handleChange=(e)=>{
        console.log(e.target.value);
    };
    //Hooks
    const [count, setCount1]=useState(0)
    const [cnt, setCount2]=useState(0);
    return (
    <div>
      <h1>This is App</h1>
      <App2 msg={message}></App2>
      <input type="text" onChange={handleChange}/>
      <br></br>
      <br></br>
      <button onClick={handleclick}>Clicked Me {count}</button>
      <br></br>
      <br></br>
      <button onClick={handleclick}>Clicked Me {count}</button> 
      <br></br>
      <br></br>
      <button onClick={handleclick1}>Clicked Me {cnt}</button> 
    </div>
  )
}

export default App
