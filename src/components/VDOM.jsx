import React from 'react'

const VDOM = () => {
  return (
    <div>
        {/* <h1>Virtual DOM</h1> */}
        <p>Behind the scene react creates whole copy of the exact DOM (Document object model) on the screen</p>
        <p>whenever user modifies the dom using react a new updated dom is created / the old Vdom is updated and react then compare between the both Vdom and actual DOM and reflects the same to actual DOM. this makes react faster as it does not have to query back and forth to the actual DOM</p>
        <p>Rerender the changed part that is affected</p>
        
    </div>
  )
}

export default VDOM