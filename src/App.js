import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';

function App() {
  const [displayCount, setDisplayCount] = useState(0)
  const getInput = (event) => {
    console.log('value = ', event.target.value);
    console.log('name = ', event.target.name);
  };
  const clickCount = (click)=>{
      setDisplayCount((prevCount)=>prevCount+click)
  }
  return (
    <div className="App">
        <input type="text" placeholder='Add something...' name='input' onChange={getInput}/>
        <button onClick={()=> clickCount(1)}>Add Number</button>
        <h3>Number of times <i><u>Add Number</u></i> has been clicked = {displayCount}</h3>
        
        <h1>Form Section</h1>
        <Form/>
    </div>
  );
}

export default App;
