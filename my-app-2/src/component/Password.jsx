import React, { useState } from 'react'

const Password = () => {
    const [status,setStatus]= useState(true)
    const passwordHandler = () =>{
        setStatus(prev=>!prev)
    }
  return (
    <>
    <div className='password' >
        <div className="inner">

    <input type= { status ? "password" : "text"} />
    <button onClick={passwordHandler} >{status ? "Show Password" : "Hide Password"}</button>
    </div>
        </div>
    </>
  )
}

export default Password