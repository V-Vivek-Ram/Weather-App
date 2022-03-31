import { useState,useEffect } from 'react'
import Display from './display'

const Weather = ({ city ,toggle }) => {
    const [weather,setWeather]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0478d91ab2a48f21f72d6563a229cccf`)
            const data= await res.json()
            const dt=data.weather
            setWeather(dt)
        }
        getData()
    },[])
  return (
    <>
    {
        weather.map((w)=>(
            <Display key={w.id} weather={w} toggle={toggle}/>
        ))
    }
    </>
  )
}

export default Weather