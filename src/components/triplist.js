import React, { useState,useEffect , useCallback} from 'react'
import "./triplist.css"

export default function Triplist() {
    const [trips, setTrips]=useState([]);
    const [url, setUrl]=useState('http://localhost:3000/trips');

    const fetchData=useCallback(async()=>{
      const data=await fetch(url)
      const json=await data.json();
      console.log(json);
      setTrips(json);
      
    },[url])

    useEffect(()=>{
      fetchData();
    },[fetchData]);

    
    
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
    <div className="filters">
      <button onClick={()=>setUrl("http://localhost:3000/trips?loc=europe")}>European Trips</button>
      <button onClick={()=>setUrl('http://localhost:3000/trips')}>All Trips</button>
    </div>
    </div>
  )
}
