import { useAppContext } from "../context/AppContext"
const Second = () =>{
    const context = useAppContext()
    return(
        <div className="card">
            <h1>Second Component</h1>
            <h3>Count is {context.state.count }</h3>
            <div className="btn">

            <button onClick={context.incrementCount} >+</button>
            <button onClick={context.decrementCount}>-</button>
            </div>
        </div>
    )
}

export default Second