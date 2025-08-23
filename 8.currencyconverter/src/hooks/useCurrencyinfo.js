import { useEffect , useState } from "react";

function useCurrencyinfo(currency) {

    const [data,setData]=useState({})

    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/42e8d698ca60bb22f46c9d9f/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.conversion_rates))
        // console.log(data);
        
    },[currency])

    return data
    
}





export default useCurrencyinfo ; 