import React, { useState, useEffect } from 'react';

export default function Animals({animals, setAnimals, originalAnimals, setOriginalAnimals}){  

    useEffect(() => {
        fetch('http://localhost:8000/api/fetch')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setAnimals(data.result);
              setOriginalAnimals(data.result);
           })
           .catch((err) => {
              console.log(err.message);
           });      
     }, []);
    

    return (
        <div>
            {animals.length > 0 ? animals.map((animal) => (
                <div className='animal-model' key={animal.id}>                    
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
        
   
  


