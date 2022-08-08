import React, { useState,useEffect } from 'react'
import "./triplist.css"

export default function Triplist() {
    const [trips, setTrips]=useState([]);

    const fetchData=async()=>{
      const data=await fetch('http://localhost:3000/trips')
      const json=await data.json();
      console.log(json);
      setTrips(json);
      
    }

    useEffect(()=>{fetchData();},[]);

    
    
  return (
    <div className='trip-list'>
    <h2>triplist</h2>
    <ul>
      {trips.map((trip=>(
        <li key={trip.id}>
          <h3>{trip.title}</h3>
          <p>{trip.price}</p>
          </li>
      )))}
    </ul>
    </div>
  )
}
