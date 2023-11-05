import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../appSlice/appSlice'

const Third = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div className="box">
    <h1>Third</h1>
    <h3>Count is {count}</h3>
    <button  onClick={()=>{dispatch(increment())}} >+</button>
        
    <button  onClick={()=>{dispatch(decrement())}} >-</button>
    </div>
  )
}

export default Third