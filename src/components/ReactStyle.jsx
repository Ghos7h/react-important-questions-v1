import React from 'react'
import { useState } from 'react';

const ReactStyle = () => {
    const style = {
     dark: {
      color: 'white',
      backgroundColor: 'black'
     },
     light: {
      color: 'black',
      backgroundColor: 'white'
     }
    };
    const [theme, setTheme] = useState('light');
    const [text, setText] = useState('red');


  return (
    <>
     <div className='external'>External Style</div>
     <br />
     <br />
      <button onClick={()=> setTheme((prev=> prev==='light'?prev='dark':prev='light' ))}>Toggle Theme</button>
      <div style={theme === 'light'?style.light:style.dark }>       
        <div>Internal Style</div>
      </div>
      <br />
      <br />
      <button onClick={()=> setText((prev=> prev==='green'?prev='black':prev='green' ))}>Toggle Text</button>
      <div style={ text==='green'?{color:'green'}: {color:'black'}}>
        <div>Inline Style</div>
      </div>  
    </>
  )
}

export default ReactStyle