import React, { useState } from 'react'

const dataArray = [{
    color: "red",
    value: "#f00"
},
{
    color: "green",
    value: "#0f0"
},
{
    color: "blue",
    value: "#00f"
},
{
    color: "cyan",
    value: "#0ff"
},
{
    color: "magenta",
    value: "#f0f"
},
{
    color: "yellow",
    value: "#ff0"
},
{
    color: "black",
    value: "#000"
}]

const SearchBar = () => {
    const [dataList , setDataList] = useState([...dataArray])
    
    const inputHandler = (e)=>{
        setDataList(()=>dataArray.filter((elm)=>elm.color.includes(e.target.value) || elm.value.includes(e.target.value) ))
    }
  return (<>
  <div className='search-bar' >

    <h3>Search Bar</h3>
    <input onKeyUp={inputHandler}  placeholder='Search Here' />
    <ul>
    {   dataList.length ?
        dataList.map((element)=>{
            return <li key={element.value} >{element.color} - {element.value}</li>
        }) : 
        <li>Oops Nothing here !!</li>
    }
    </ul>
    </div>
  </>
  )
}

export default SearchBar