// import './App.css'
import First from '../src/contextAPIComponents/First'
import Second from '../src/contextAPIComponents/Second'
import { AppProvider } from './context/appContext'
import Third from './reduxComponents/Third'
import Fourth from './reduxComponents/Fourth'
import { useEffect, useReducer, useState } from 'react'
import ProgressBar from './progressBarComponent/ProgressBar'
import Mouse from './progressBarComponent/Mouse'
var interval;
function App() {
  const [running,setRunning] = useState(false)
  const [progress,setProgress] = useState(10)
  const [mousePosition,setMousePosition] = useState({left:0,top:0})
  const [mousePosition2,setMousePosition2] = useState({left:0,top:0})
  const handleMouseMovement=(ev)=>{
    setMousePosition({left:ev.pageX - 40,top:ev.pageY - 40})
    setMousePosition2({left:ev.pageX - 5,top:ev.pageY - 5})
    // console.log(mousePosition)
  }
  useEffect(()=>{
    if(running){
      interval = setInterval(()=>{
        setProgress(prev=>prev+0.01)
      },10)
    }else{
      clearInterval(interval)
    }
  },[running])


  useEffect(()=>{
    if(progress>100){
      clearTimeout(interval)
      setRunning(prev=>!prev)
    }
  },[progress])
   return (
    <  >
    <div className='screen' onMouseMove={(ev)=>{handleMouseMovement(ev)}} >

    <Mouse pos={{mousePosition,mousePosition2}}/> 
    <AppProvider>
    <div className='context' >
      <h1>Context API</h1>
      <div className="container">
      <First/>
      <Second/>
      </div>
    </div>
    </AppProvider>

    <div className='context' >
      <h1>Redux Took Kit</h1>
      <div className="container">
        <Third/>
        <Fourth/>
      </div>
    </div>
    <div className="pb">
      <h1>Progress Bar</h1>
      <ProgressBar progressDone={progress}  />
      <button onClick={()=>{setRunning(prev=>!prev)}} >{running ? 'Stop':'Start'}</button>
      <button onClick={()=>{setProgress(0)}}   >Clear</button>
    </div>
    </div>
    </>
  )
}

export default App