import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = ({children}) => {

    const [data,setData] = useState([]);

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products').then((Response)=>{
            Response.json().then((data)=>{
                setData(data)
            })
        }).catch((error)=>{
            console.log('Check your network an error occured',error);
        })
    },[])


    return ( 
        <div>
            <ProductContext.Provider value={{data}}>
                {children}
            </ProductContext.Provider>
        </div>
     );
}
 
export default Context;