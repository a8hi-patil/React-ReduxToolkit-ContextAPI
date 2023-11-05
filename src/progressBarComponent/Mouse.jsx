import React from 'react'

const Mouse = (prop) => {
  return (
    <>
    <div style={prop.pos.mousePosition} className='miniMouse' ></div>
    <div style={prop.pos.mousePosition2} className='miniMouse2' >    </div>
        </>
  )
}

export default Mouse