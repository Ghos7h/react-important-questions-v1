import React from 'react'

const ReactStyle = () => {
    const style = {
        internal: {
            color: 'blue'
        }
    }
  return (
    <>
    <div className='external'>External Style</div>
    <div style={style.internal}>Internal Style</div>
    <div style={{color: 'green'}}>Inline Style</div>
    </>
  )
}

export default ReactStyle