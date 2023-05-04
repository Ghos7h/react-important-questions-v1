import React, {useState} from 'react'

const StateFul = () => {
    const [first/* , setfirst */] = useState('My Stateful component')
  return (
    <>
        <h1>StateFul</h1>
        <p>Component with state is stateful</p>
        <br />
        <h3>{first}</h3>
    </>
  )
}

export default StateFul