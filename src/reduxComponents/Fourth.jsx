import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../appSlice/appSlice'
const Fourth = () => {

  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()
 
  return (
    <div className="box">
    <h1>Fourth</h1>
    <h3>Count is {count} </h3>
    <button onClick={()=>{dispatch(increment())}} >+</button>
        
    <button onClick={()=>{dispatch(decrement())}}  >-</button>
    </div>
  )
}

export default Fourth