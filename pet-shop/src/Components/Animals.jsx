import React, { useState, useEffect } from 'react';

export default function Animals({animals}){
    

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
        
   
  


