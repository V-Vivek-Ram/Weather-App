import React from 'react'

const Display = ({ weather,toggle }) => {
    const url=`http://openweathermap.org/img/wn/${weather.icon}@2x.png`
  return (
    <>
                <h1>{weather.main}</h1>
                <img src={url} alt="weather icon"/>
                <p>{weather.description}</p>
                <button className='btn btn-success btn-sm' onClick={toggle}>Back</button>
    </>
  )
}

export default Display