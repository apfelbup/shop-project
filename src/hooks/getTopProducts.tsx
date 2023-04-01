import { useEffect, useState } from "react";
import { IProducts } from "../types";


export function getTopProducts(){
    
    const [data,setData] = useState<[IProducts]|[]>([]);
    useEffect(() =>{
        try{
            const response = fetch(`https://63ee20ecd466e0c18ba9d22e.mockapi.io/dress?sortBy=rating&order=desc`)
            .then(res=> res.json())
            .then(d=> setData(d))
            if(!response){
                throw new Error('ServerError');
            }
    
        }catch(error:string|any){
            setData(error.message);
        }
    }, [])
    
    const topProducts = data?.slice(0, 4);

    return topProducts;
}

