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
            {animals.length > 0 ? animals.map((animal) => {

                return animal.id
                // Animal component to display on the main page
            }) 
            
            : 'loading animals' }
        </div>
    )
};
        
   
  


