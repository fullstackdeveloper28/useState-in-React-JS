import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState("FullStackDeveloper28")
  function ChangeValue()
  {
    if(data=="FullStack")
    {
      setData("FullStackDeveloper28")
    }
    else{
      setData("FullStack")
    }
    
  }
  return (
    <div className="App">
     <div>Welcome! {data}</div>
     <div><button onClick={ChangeValue}>ChangeValue</button></div>
    </div>
  );
}

export default App;
