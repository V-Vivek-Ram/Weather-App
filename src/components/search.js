import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
const Search = ({ addCity }) => {
    const [city,setCity] =useState([])
    const onChange=()=>{
        addCity(city)
    }
  return (
    <>
    <h1>Enter the City Name</h1>
    <input type="text" className='my-5' value={city} onChange={(c)=>setCity(c.target.value)}/><br></br>
    <button className='btn btn-success btn-sm' onClick={onChange}>Get Weather</button>
    </>
  )
}

export default Search