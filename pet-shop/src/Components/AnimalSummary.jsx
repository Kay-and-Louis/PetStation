import React, { useState } from 'react';

export default function AnimalSummary({animalId, animals, quantity}){

    animalId = parseInt(animalId);
    let animal = null;
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].id === animalId) {
            animal = animals[i];
            break;
        }
    }
    if (animal === null) {
        return;
    }

    return (
        <div>
            <div>{animal.type} - £{animal.price} * {quantity}</div>
            <div>{animal.description}</div>
        </div>
    )
};
        
   
  


