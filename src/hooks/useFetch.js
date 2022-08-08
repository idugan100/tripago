import {useState, useEffect} from 'react'
const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPending, setIsPending]=useState(false);
    const[error, setError]=useState(null);
    useEffect(()=>{
        const controller= new AbortController();
        const fetchData=async()=>{
           
            setIsPending(true);
            try{
            const response=await fetch(url,{signal:controller.signal});
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const json=await response.json();
            setIsPending(false);
            setData(json);
            setError(null);
            setData(json);}catch(err){
                setIsPending(false);
                setError("could not fetch data");
                console.log(err.message);
            }
            
        }
        fetchData();
        return ()=>{
            controller.abort();
        }
        
    },[url])
    return {data:data, isPending:isPending, error:error}

}
export default useFetch;

