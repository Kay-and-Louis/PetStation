import React, { useState, useEffect } from 'react';

export default function Animals(){

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/fetch')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setAnimals(data.result);
           })
           .catch((err) => {
              console.log(err.message);
           });
           // New endpoint for the total request
     }, []);
  

    return (
        <div>
            {animals.length > 0 ? animals.map((animal) => (
                <div className='animal-model'>
                    <p>ID: {animal.id}</p>
                    <p>Type: {animal.type}</p>
                    <p>Price: £{animal.price}</p>
                    <p>Sex: {animal.sex}</p>
                    <p>Age: {animal.age_in_months}</p>
                    <p>Health Score: {animal.health_score}</p>                         
                </div>            
            )) 
            
            : 'loading animals' }
        </div>
    )
};
        
   
  


