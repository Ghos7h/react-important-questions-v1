import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import ReactStyle from './components/ReactStyle'
import ControlledAndUncontrolled from './components/ControlledAndUncontrolled'
import VDOM from './components/VDOM';
import InnerHtml from './components/InnerHtml'
import StateLess from './components/StateLess';
import StateFul from './components/StateFul';
import Debouncing from './components/Debouncing';
import DemoContext from './components/DemoContext';
import Posts from './components/HOCs/Posts';
import User from './components/HOCs/User';

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
        <h1>React Styling</h1>
        <ReactStyle/>

        <h1>Controlled And Uncontrolled state</h1>
        <ControlledAndUncontrolled/>
        <h1>Virtual Document Object Modal</h1>
        <VDOM/>

        <h1>Inner Html</h1>
        <InnerHtml/>
        <h1>Stateful and Stateless</h1>
        <h3>Stateless</h3>
        <StateLess></StateLess>
        <StateFul></StateFul>

        <h1>Debounce</h1>
        <Debouncing/>

        <h1>Context API</h1>
        <DemoContext/>

        <h1>Higher Order Component</h1>
        <p>HOC is a plain js component that takes one argument called the wrapped component and outputs an enhanced component</p>
        <p>the HOC name starts with an 'with' prefix naming convention in HOC</p>
        <Posts/>
        <User/>

    </div>
  );
}

export default App;
