import React from 'react'

const ProgressBar = ({progressDone}) => {
  return (
    <>
    
    <div className="outer">
        <div  style={{width:`${progressDone}%`}} className="inner">

        </div>
    </div>

    </>
  )
}

export default ProgressBar