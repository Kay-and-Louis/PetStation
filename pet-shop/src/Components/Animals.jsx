import React, { useState, useEffect } from 'react';

export default function Animals({animals, moreAnimalInfo, setMoreAnimalInfo}){

    function info(id){
        setMoreAnimalInfo(id);
    }
    
    return (
        <div className={`animal-format ${moreAnimalInfo ? 'opacity' : ''}` }>
            {animals.length > 0 ? animals.map((animal) => (
                <div className='animal-model' key={animal.id}>
                    <img className='animal-image' src={animal.img} alt="Picture of animal" />                    
                    <p><span>Type: </span>{animal.type}</p>                    
                    <p><span>Sex: </span>{animal.sex}</p>
                    <p><span>Age: </span>{animal.age_in_months}</p>
                    <p className='healthScore'><span>Health Score: </span>{animal.health_score}</p>  
                    <p className='price'>£{animal.price}</p> 
                    <button className={`more-info ${moreAnimalInfo === animal.id ? 'selected' : ''}`} onClick={() => info(animal.id)}>More Info</button>                   
                    <button className='cart'>Add to Cart</button>   
                </div>            
            )) 
            
            : 'loading animals' }           
            
        <div>
            {moreAnimalInfo && (
                <div className='info-box'>
                    <div className='info-content'>
                        <h2>More Information</h2>
                        <p>{animals.find(animal => animal.id === moreAnimalInfo)?.description}</p>
                        <button className='close-window' onClick={() => info(false)}>X</button>
                    </div>    
                </div>
            )}
        </div>
        </div>       
    )
};
        
   
  


