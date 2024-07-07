import React, { useState, useEffect } from "react";


export default function TotalPrice(){
    const [price, setPrice] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/prices/total')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPrice(data.total.totalPrice);
           })
           .catch((err) => {
              console.log(err.message);
           });           
     }, []);
        
    return (
        <div>
            {price === null ? 'Total price pending...' : <div>Total price: {price}</div> }
        </div>
    )
}