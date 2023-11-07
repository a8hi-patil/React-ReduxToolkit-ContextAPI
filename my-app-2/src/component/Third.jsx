import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../Slice/AppSLice'
const Third = () => {
    
    const context =  useSelector(state=>state)
    const dispatch = useDispatch()
    return(
        <div className="card">
            <h1>Third Component</h1>
            <h3>Count is {context.count }</h3>
            <div className="btn">

            <button onClick={()=>{dispatch(increment())}} >+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            </div>
        </div>
    )
}

export default Third