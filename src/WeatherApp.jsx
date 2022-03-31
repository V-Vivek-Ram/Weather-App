import './components/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Search from './components/search'
import Weather from './components/weather'

const Weatherapp = () => {
  const [show,setShow] = useState(false)
  const [city,setCity] = useState('')
  const toggleShow=()=>{
      setShow(!show)
  }
  const addCity=(c)=>{
    setCity(c)
    setShow(!show)
  }
  return (
    <>
        {
        show===false ? 
        <div className='box text-center'><Search addCity={addCity}/></div>
         : <div className='box2 text-center'><Weather toggle={toggleShow} city={city}/></div>
         }
        </>
  )
}

export default Weatherapp