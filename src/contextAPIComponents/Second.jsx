import { useAppContext } from "../context/appContext"
const Second = () =>{
    const context = useAppContext()

    return (<>
    <div className="box">

        <h1>Second</h1>
        <h3>Count is {context.state.count}</h3>
        <button onClick={()=>{context.incrementCount()}} >+</button>
        <button onClick={context.decrementCount} >-</button>
    </div>
        </>)
}

export default Second