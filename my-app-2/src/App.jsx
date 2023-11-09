import './App.css'
import First from './component/First'
import Fourth from './component/Fourth'
import Second from './component/Second'
import Third from './component/Third'
import AppProvider from './context/AppContext'
import { Provider } from 'react-redux'
import AppStore from './store/AppStore'
import { useState } from 'react'
import Mouse from './component/Mouse'
import Password from './component/Password'
import SearchBar from './component/SearchBar'
function App() {
  const [mousePosition,setMousePosition] = useState({top:50,left:50})
  const mouseHandler=(e)=>{
     setMousePosition({top:e.pageY,left:e.pageX}) 
  }
  return (
    <>
    {/* <div onMouseMove={mouseHandler} style={{'height':'100vh'}} > */}
    {/* <Mouse position={mousePosition} /> */}
    <h1 style={{'textAlign':'center'}} >Lets Begin 🧡</h1>
    <h3 style={{'textAlign':'center'}} >Context API 🧡</h3>
    <div className="container">
      <AppProvider>
    <First/>
    <Second/>
      </AppProvider>
    </div>
    <h3 style={{'textAlign':'center'}} >Redux Toolkit 🧡</h3>
    <div className="container">
      <Provider store={AppStore} >
    <Third/>
    <Fourth />
      </Provider>
      </div>
      <h3 style={{'textAlign':'center'}} >Show Hide Password 🧡</h3>
  <Password/>
    <div className="container"  >
    <SearchBar />

    </div>
    </>
  )
}

export default App
