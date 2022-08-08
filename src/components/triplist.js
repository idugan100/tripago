import React, { useState} from 'react'
import "./triplist.css"
import useFetch from "../hooks/useFetch.js"

export default function Triplist() {
    const [url, setUrl]=useState('http://localhost:3000/trips');
    const{data,isPending,error}=useFetch(url);
  
    
    
  return (
    <div className='trip-list'>
    <h2>triplist</h2>
    {isPending && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <ul>
      {data &&data.map((trip=>(
        <li key={trip.id}>
          <h3>{trip.title}</h3>
          <p>{trip.price}</p>
          </li>
      )))}
    </ul>
    <div className="filters">
      <button onClick={()=>setUrl("http://localhost:3000/trips?loc=europe")}>European Trips</button>
      <button onClick={()=>setUrl('http://localhost:3000/trips')}>All Trips</button>
    </div>
    </div>
  )
}
