import React,{useState, useRef} from 'react'

const ControlledAndUncontrolled = () => {
    // Controlled
    const [inputText, setInputText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('inputText = ', inputText);
    }

    // uncontrolled
    const inputRef = useRef(null);
    const handleUncontrolledSubmit = (e) =>{
        e.preventDefault();
        inputRef.current = e.target.value
    }
  return (
    <div>
        <h3>Controlled</h3>
        
          <p>Controlled component is automatically the component</p>
          <p>we are using component state or control component useState to control the state or the value of the form field</p>
          <p>Validates form</p>
          <p>do not maintains the internal state</p>
          <p>better control over the form element and data</p>
          <p>state will be predictable</p>
        
        <form>
            <input type="text" placeholder='controlled' onChange={(e)=> setInputText((prev=> prev=e.target.value))} value={inputText}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        <h3>Uncontrolled</h3>
        
          <p>handle form data with the help of the DOM</p>
          <p>Traditional way of handling elements</p>
          <p>cannot validates form</p>
          <p>maintains the internal state</p>
          <p>limited control over the form element and data</p>
          <p>state will be not predictable because of lifecycle of the component (did_mount, unmount, other lifecycle methods) this form elements may loose its reference</p>
            <p>some other element may also have the access to change the input ref</p>
           
        <form>
            <input type="text" placeholder='uncontrolled' ref = {inputRef}/>
            <button onClick={handleUncontrolledSubmit}>Submit</button>
        </form>            
    </div>
  )
}

export default ControlledAndUncontrolled