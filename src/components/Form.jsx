import React, {useState} from 'react'

const Form = () => {
    const [objData, setObjData] = useState({});

    const getInputs = (value, name) => {
        setObjData((prev)=>({...prev, [name]: value}))
    }
    const submit = (e) => {
        e.preventDefault();
        console.log('objData = ', objData)
    }
  return (
    // <div className='form'>
    <>
    <form onSubmit={(e)=> submit(e)}>
        <input type="text" placeholder='Write your name' name='name' onChange={(event)=>getInputs(event.target.value, event.target.name)}/>
        <br />
        <br />
        <input type="number" placeholder='Write your age' name='age' onChange={(event)=>getInputs(event.target.value, event.target.name)}/>
        <br />
        <br />
        <input type="text" placeholder='Write your hobbies' name='hobbies' onChange={(event)=>getInputs(event.target.value, event.target.name)}/>
        <br />
        <br />
        <input type="date" placeholder='Write your date' name='date' onChange={(event)=>getInputs(event.target.value, event.target.name)}/>
        <br />
        <br />
        <input type="file" />
        <br />
        <br />
        {/* <button onClick={submit}>Submit</button> */}
        <button type='submit'>Submit</button>
        <br />
        <br />
        <button type='reset'>Reset</button>
    {/* </div> */}
    </form>
    </>
  )
}

export default Form