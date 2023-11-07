import React from 'react'

const Mouse = ({position}) => {

  return (<>
    <div className='mouse' style={{left:`${position.left-15}px`,top:`${position.top-15}px`}}  ></div>
    <div className='mouse1' style={{left:`${position.left-2.5}px`,top:`${position.top-2.5}px`}}  ></div>
    
  </>
  )
}

export default Mouse